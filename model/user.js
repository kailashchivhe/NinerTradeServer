const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {type: String, required:[true, 'firstName is required']},
    lastName: {type: String, required:[true, 'lastName is required']},
    userName: {type: String, required:[true, 'Username is required']},
    password: {type: String, required:[true, 'Password is required'],
            minLength : [10,"The password should have at least 10 characters"]},
},
{timestamps : true}
);

module.exports = mongoose.model('User',userSchema);