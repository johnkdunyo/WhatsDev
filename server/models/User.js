const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creat user schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    firstName : {
        type: String,
        required: true,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    confirmationToken: String,
    confirmationTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpires: Date
    
});



module.exports = mongoose.model('User', UserSchema);