const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');

router.post('/', async (req, res) => {
    const { user_id, year, month, day, description, category, amount } =
        req.body;

    try {
        const newCalorie = new Calories({
            user_id,
            year,
            month,
            day,
            description,
            category,
            amount,
        });
        await newCalorie.save();
        res.status(201).json({
            message: 'Calorie consumption item added successfully',
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', function (req, res) {
    res.send('ADD CALORIES');
});

module.exports = router;
