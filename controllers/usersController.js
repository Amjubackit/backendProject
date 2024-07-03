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

const userService = require('../services/userService');

// Get user - controller layer
const getUser = async (req, res) => {
    try {
        // Call service function to get the user data by ID
        const user = await userService.findUserById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        // Return 404 if user not found.
        if (err.message === 'User not found') {
            return res.status(404).json({ message: err.message });
        }
        // Other server error
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getUser };
