const mongoose = require('mongoose');

// Define calorie schema for DB
const calorieSchema = new mongoose.Schema(
    {
        user_id: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: false,
        },
        month: {
            type: Number,
            required: false,
        },
        day: {
            type: Number,
            required: false,
        },
        id: {
            type: String,
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
            // Ensure providing valid categories only
            enum: ['breakfast', 'lunch', 'dinner', 'other'],
        },
        amount: {
            type: Number,
            required: true,
        },
    },
    // Removing the __v property
    { versionKey: false }
);

// Create calories collection
module.exports = mongoose.model('calories', calorieSchema);
