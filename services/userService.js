const User = require('../models/user');

// Get user by ID - service layer
const getUserById = async (id) => {
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
    getUserById,
};
