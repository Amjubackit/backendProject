const mongoose = require('mongoose');
const Users = require('./models/users.js');
const path = require('path');
const fs = require('fs');

// Load default user from json file
const loadDefaultUser = () => {
    const filePath = path.join(__dirname, 'defaultUser.json');
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// Loads default user from file and add it to users collection
const addDefaultUser = async () => {
    // Delete default user on restart
    console.log('Deleting default user');
    await Users.deleteOne({ id: 123123 });
    const defaultUser = loadDefaultUser();
    // Add the default user to the database and save
    const user = new Users(defaultUser);
    await user.save();
    console.log('Default user added.');
};

const connectDB = async () => {
    try {
        // Connect to mongodb server
        console.log('Connecting mongodb...');
        await mongoose.connect('mongodb://localhost:27017/be-db');
        console.log('MongoDB connected...');
        await addDefaultUser();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
