const calorieService = require('../services/calorieService');
const { v4: uuidv4 } = require('uuid');

const addCalorieItem = async (req, res) => {
    try {
        await calorieService.addCalorie({
            id: uuidv4(),
            ...req.body,
        });

        res.status(201).json({
            message: 'Calorie item added successfully',
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCaloriesByUserAndDate = async (req, res) => {
    const { user_id, year, month } = req.query;
    try {
        const calories = await calorieService.getCaloriesByUserAndDate(
            user_id,
            year,
            month
        );

        res.status(201).send(calories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addCalorieItem, getCaloriesByUserAndDate };
