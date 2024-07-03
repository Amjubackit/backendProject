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

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user.js');
const path = require('path');
const { loadJson } = require('../utils/helperFunctions');
const MONGODB_URI =
    'mongodb+srv://elimelechmail:3FRfAeyRzgyDo7ib@mycluster.o0gfu3x.mongodb.net/';

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
        console.log(`MONGODB_URI: ${MONGODB_URI}`);
        await mongoose.connect(MONGODB_URI);
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
