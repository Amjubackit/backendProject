const { getCaloriesByUserAndDate } = require('../services/calorieService');

const getReport = async (req, res) => {
    // unpack query parameters
    const { user_id, year, month } = req.query;
    try {
        // Get calories via calorieService
        const calories = await getCaloriesByUserAndDate(user_id, year, month);
        // Init default report object
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: [],
        };
        // Fill in reports according to category
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
};

module.exports = { getReport };
