const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        birthday: {
            type: String,
            required: true,
        },
    },
    { versionKey: false } // Removing the __v property
);

module.exports = mongoose.model('users', userSchema);
