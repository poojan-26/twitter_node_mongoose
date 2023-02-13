const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username : String,
    tweet: String,
    count: {type: Array, default: false},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Tweet', UserSchema);