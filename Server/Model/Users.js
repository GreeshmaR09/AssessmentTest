const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true, 
        minlength: 3, 
        maxlength: 50, 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5, 
        maxlength: 255, 
        lowercase: true, 
        match: /^\S+@\S+\.\S+$/, 
    },
    password: {
        type: String,
        required: true,
        minlength: 6, 
        maxlength: 1024, 
    }
});

module.exports = mongoose.model('Users', UserSchema);
