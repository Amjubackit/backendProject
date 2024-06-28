const express = require('express');
const router = express.Router();
const path = require('path');
const { loadJson } = require('../utils/helperFunctions');

const getDevelopersData = () => {
    const filePath = path.join(__dirname, '../config/developers.json');
    return loadJson(filePath);
};

router.get('/', (req, res) => {
    try {
        const developers = getDevelopersData();
        res.json(developers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
