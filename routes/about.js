const express = require('express');
const router = express.Router();
const path = require('path');
const { loadJson } = require('../utils/helperFunctions');

// Get developers data from json file
const getDevelopersData = () => {
    const filePath = path.join(__dirname, '../config/developers.json');
    // Utilize helper function to load the json file into json object and return it.
    return loadJson(filePath);
};

router.get('/', (req, res) => {
    try {
        const developers = getDevelopersData();
        res.status(200).json(developers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
