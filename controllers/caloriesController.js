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

const calorieService = require('../services/calorieService');

// Add calorie item - controller layer
const addCalorieItem = async (req, res) => {
    try {
        // Utilize calorie service function to add calorie item
        const result = await calorieService.addCalorieItem(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get calories by user and date - controller layer
const getCaloriesByUserAndDate = async (req, res) => {
    try {
        // Unpack query params from request object
        const { user_id, year, month } = req.query;
        // Utilize calorie service function to get calories by user and date (year & month)
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
