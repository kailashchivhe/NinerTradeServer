const mongoose = require('mongoose');
const trade = require('./trade');
const user = require('./user');
const Schema = mongoose.Schema;

const watchListSchema = new Schema({
    userId: {type: String, required:[true, 'user id is required']},
    tradeId: {type: String, required:[true, 'user id is required']},
    tradeTitle: {type: String, required:[true, 'user id is required']},
},
{timestamps : true}
);

module.exports = mongoose.model('WatchList',watchListSchema);