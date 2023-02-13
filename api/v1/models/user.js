const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    username : String,
    address : String,
    city : String,
    gender : String,
    email : String,
    password : String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);