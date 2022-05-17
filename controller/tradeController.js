const model = require('../model/trade');
const offer = require('../model/offer');
const watch = require('../model/watch_list');

exports.getAllTrades = (req,res)=>{
    model.find()
    .then(trades=> res.json(trades))
    .catch(error=>next(error));
};

exports.createTrade =  (req,res, next)=>{
    let trade = new model(req.body);
    trade.save()
    .then((trade)=>{
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

exports.getTradeById =  (req,res, next)=>{
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let error = new Error ("Invalid trade id");
        error.status = 400; 
        return next(error);
    }
    model.findById(id)
    .then(trade=>{
        if(trade){
            res.json(trade);
        }else{
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(error=>{
        next(error)
    });  
};

exports.updateTrade = (req,res, next)=>{
    let trade = req.body;
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let error = new Error ("Invalid trade id");
        error.status = 400; 
        return next(error);
    }else{
        model.findByIdAndUpdate(id,trade,{useFindAndModify:false, runValidators:true})
        .then(trade=>{
            if(trade){
                res.status(200);
                res.json({'response':'success'});
            }else {
                let err = new Error('Cannot find a trade with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(error=>{
            if(error.name === "ValidationError"){
                error.status = 400;
            }
            next(error)})
    }
};

exports.deleteTrade = (req,res, next)=>{
    let id = req.params.id;
    if(!id.match(/^[0-9a-fA-F]{24}$/)){
        let error = new Error ("Invalid trade id");
        error.status = 400; 
        return next(error);
    }else{
        model.findByIdAndDelete(id,{useFindAndModify:false})
        .then(trade=>{
            if(trade){
                offer.deleteOne({'requestTradeId': id });
                offer.deleteOne({'receiverTradeId': id });
                watch.deleteOne({'tradeId': id});
                res.status(200);
                res.json({'response':'success'}); 
            }else {
                let err = new Error('Cannot find a trade with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(error=>{
            if(error.name === "ValidationError"){
                error.status = 400;
            }
            next(error)})
    }
};