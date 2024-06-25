const express = require('express');
const router = express.Router();
const Calories = require('../models/calories');

router.get('/', async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const calories = await Calories.find({ user_id, year, month });
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: [],
        };

        calories.forEach((calorie) => {
            report[calorie.category].push({
                day: calorie.day,
                description: calorie.description,
                amount: calorie.amount,
            });
        });

        res.json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
