const express = require('express');
const router = express.Router();
const { addCalorieItem } = require('../controllers/caloriesController');

router.post('/', addCalorieItem);

module.exports = router;
