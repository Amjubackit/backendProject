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

const User = require('../models/user');

// Find user by ID - service layer
const findUserById = async (id) => {
    try {
        // Find user that matches given ID in database
        const user = await User.findOne({ id });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    findUserById,
};
