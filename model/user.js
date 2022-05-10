const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {type: String, required:[true, 'firstName is required']},
    lastName: {type: String, required:[true, 'lastName is required']},
    userName: {type: String, required:[true, 'Username is required']},
    password: {type: String, required:[true, 'Password is required'],
            minLength : [10,"The password should have at least 10 characters"]},
},
{timestamps : true}
);

userSchema.pre('save',function(next){
    let user = this;
    if(!user.isModified('password')){
        return next();
    }else{
        bcrypt.hash(user.password, 10)
        .then(hash=>{
            user.password = hash;
            next();
        })
        .catch(error=>next(error))
    }
})

userSchema.methods.comparePassword = function(loginpassword){
   return bcrypt.compare(loginpassword,this.password);
}

module.exports = mongoose.model('User',userSchema);