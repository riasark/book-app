const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    pass: {type: String, required: true},
    user: { type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;