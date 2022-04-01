const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const tradeRoutes = require('./routes/tradeRoutes');
var bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

let port = 3000;
let host = 'localhost';

mongoose.connect('mongodb://localhost:27017/trades',{ useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    //start the server
    app.listen(port, host, ()=>{
        console.log('Server is running on port', port);
    });
})
.catch(err=>console.log(err.message));

app.use( express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.status(404);
    res.json({'response':'Server Error' });
});

app.use('/trade', tradeRoutes );

app.use((err,req,res, next)=>{
    if(!err.status){
        err.status = 500;
        err.message = ("Internal Server Error");
    }
    res.status(err.status);
    res.json({'response':'Server Error '+err.message });
});

app.use((req,res, next)=>{
    let err = new Error('The server cannot locate ' + req.url );
    err.status = 404;
    next(err);
});