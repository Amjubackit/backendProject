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

const userSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        birthday: { type: Date, required: true },
    },
    // versionKey - Removing the __v property
    // strict - Allowing additional properties to be saved (Due to the requirement "at the minimum")
    { versionKey: false, strict: false }
);

// Create users collection
module.exports = mongoose.model('users', userSchema);
