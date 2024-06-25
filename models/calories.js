const mongoose = require('mongoose');

const caloriesSchema = new mongoose.Schema(
    {
        user_id: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        month: {
            type: Number,
            required: true,
        },
        day: {
            type: Number,
            required: true,
        },
        id: {
            type: Number,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ['breakfast', 'lunch', 'dinner', 'other'],
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false }
);

module.exports = mongoose.model('calories', caloriesSchema);
