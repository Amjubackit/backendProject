require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.js');
const path = require('path');
const { loadJson } = require('../utils/helperFunctions');

// Load default user from json file
const loadDefaultUser = () => {
    console.log('Loading default user from json file...');
    const filePath = path.join(__dirname, 'defaultUser.json');
    return loadJson(filePath);
};

// Add default user to users collection
const addDefaultUser = async () => {
    console.log('Pushing default user to database...');
    const defaultUser = loadDefaultUser();
    // Add the default user to the database and save
    const user = new User(defaultUser);
    await user.save();
};

// Drop existing collections
const cleanDatabase = async () => {
    console.log('Dropping collections...');
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.drop();
    }
};

// Connect to mongodb server
const connectDB = async () => {
    try {
        console.log('Connecting mongodb...');
        await mongoose.connect(
            process.env.MONGODB_SERVER || `mongodb://localhost:27017/local-db`
        );
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

// Init database, connect -> clean -> add default data
const initDatabase = async () => {
    await connectDB();
    await cleanDatabase();
    await addDefaultUser();
    console.log('Init DB completed, Server is ready to use.');
};

module.exports = initDatabase;
