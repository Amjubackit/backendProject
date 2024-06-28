const Users = require('../models/users');

const getUserById = async (id) => {
    try {
        const user = await Users.findOne({ id });
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
