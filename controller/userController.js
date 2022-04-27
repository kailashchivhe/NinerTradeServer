const model = require('../model/user');
const trade = require('../model/trade');
const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next)=>{
  if(!req.headers.authorization) 
  {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') 
  {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) 
  {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

exports.getAllUserTrades = (req,res, next)=>{
    let id = req.params.id;

    trade.find({userId: id}, function (err, trades) {
        if (!err)
        {
            res.json(trades); 
        }
        else{
            next(err)
        }
    });
};

exports.createUser =  (req,res, next)=>{
    let user = new model(req.body);
    console.log(user);
    user.save()
    .then((user)=>{
        res.status = 200;
        res.json({'response':'success'});
    })
    .catch(error=>{
        console.log(error);
        if(error.name === "ValidationError"){
            error.status = 400;
        }
        next(error);
    });
};

exports.getUser = (req,res, next)=>{
    let userData = req.body;
    console.log(userData);
    model.findOne({userName: userData.userName, password: userData.password}, function (err, myUser) {
        if (!err)
        {
            res.json(myUser); 
        }
        else{
            res.status(401).send('Invalid User');
        }
    });
}

exports.login = (req,res, next)=>{
    let userData = req.body
    model.findOne({email: userData.email, password: userData.password}, function (err, myUser) {
        if (!err)
        {
            let payload = {subject: 1};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200)
            res.json({'token':token});   
        }
        else 
        {
            res.status(401).send('Invalid Password');
        }
    });
};