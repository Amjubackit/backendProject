/***----------------------
 * Developers:
 *------------------------
 * First name: Bar
 * Last name: Elimelech
 * ID: 313586869
 *------------------------
 * First name: George
 * Last name: Zedgenidze
 * ID: 316048073
 *------------------------
 */

const mongoose = require('mongoose');

// Define calorie schema for DB
const calorieSchema = new mongoose.Schema(
    {
        user_id: { type: String, required: true },
        year: { type: Number, required: true },
        month: { type: Number, required: true },
        day: { type: Number, required: true },
        id: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        category: {
            type: String,
            required: true,
            // Ensure providing valid categories only
            enum: ['breakfast', 'lunch', 'dinner', 'other'],
        },
        amount: { type: Number, required: true },
    },
    // versionKey - Removing the __v property
    // strict - Allowing additional properties to be saved (Due to the requirement "at the minimum")
    { versionKey: false, strict: false }
);

// Create calories collection
module.exports = mongoose.model('calories', calorieSchema);
