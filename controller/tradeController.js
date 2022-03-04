const model = require('../model/trade');

exports.getAllTrades = (req,res)=>{
    res.json(model.find());
};

exports.createTrade =  (req,res, next)=>{
    let trade = req.body;
    model.save(trade);
    res.status = 200;
    res.json({'response':'success'});
};

exports.getTradeById =  (req,res, next)=>{
    let id = req.params.id;
    let trade = model.findById(id);
    if(trade){
        res.json(trade);
    }else
    {
        let err = new Error('Cannot find trade with id ' + id );
        err.status = 404;
        next(err);
    }
};

exports.updateTrade = (req,res, next)=>{
    let trade = req.body;
    let id = req.params.id;
    if(model.updateById(id, trade)){
        res.status(200);
        res.json({'response':'success'});
    }
    else{
        let err = new Error('Cannot find story with id ' + id );
        err.status = 404;
        next(err);
    }
};

exports.deleteTrade = (req,res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)){
        res.status(200);
        res.json({'response':'success'});
    }
    else{
        let err = new Error('Cannot find story with id ' + id );
        err.status = 404;
        next(err);
    }
};