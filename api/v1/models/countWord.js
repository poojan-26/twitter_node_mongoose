const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    word : String,
    count : String,
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('countWord', UserSchema);