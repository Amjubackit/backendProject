const Users = require('../models/users');

// Get user by ID
const getUser = async (req, res) => {
    try {
        // Try to find the user in the DB by ID
        const user = await Users.findOne({ id: req.params.id });
        if (!user) {
            // User not found, return 404
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getUser };
