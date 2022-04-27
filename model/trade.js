const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    firstName: {type: String, required:[true, 'firstName is required']},
    lastName: {type: String, required:[true, 'lastName is required']},
    userId: {type: String, required:[true, 'User id is required']},
    type: {type: String, required:[true, 'Type is required']},
    quantity: {type: Number, required:[true, 'Quantity is required']},
    description: {type: String, required:[true, 'content is required'],
            minLength : [10,"The content should have at least 10 characters"]},
},
{timestamps : true}
);

module.exports = mongoose.model('Trade',tradeSchema);