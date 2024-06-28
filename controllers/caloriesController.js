const calorieService = require('../services/calorieService');

const addCalorieItem = async (req, res) => {
    try {
        const result = await calorieService.addCalorieItem(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getCaloriesByUserAndDate = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const calories = await calorieService.getCaloriesByUserAndDate(
            user_id,
            year,
            month
        );
        res.status(200).json(calories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    addCalorieItem,
    getCaloriesByUserAndDate,
};
