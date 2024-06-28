const userService = require('../services/userService');

// Get user - controller layer
const getUser = async (req, res) => {
    try {
        // Call service function to get the user data by ID
        const user = await userService.getUserById(req.params.id);
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
