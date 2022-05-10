const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    requestTradeId: {type: String, required:[true, 'request trade is required']},
    requestTradeTitle: {type: String, required:[true, 'request trade is required']},
    requestTradeDescription: {type: String, required:[true, 'request trade is required']},
    receiverTradeId: {type: String, required:[true, 'request trade is required']},
    receiverTradeTitle: {type: String, required:[true, 'request trade is required']},
    receiverTradeDescription: {type: String, required:[true, 'request trade is required']},
    requestUserId: {type: String, required:[true, 'request user is required']},
    receiverUserId: {type: String, required:[true, 'receive user is required']},
    status: {type: Boolean, required:[true, 'status is required']},
},
{timestamps : true}
);

module.exports = mongoose.model('Offer',offerSchema);