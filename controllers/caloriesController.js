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
        // Utilize calorie service function to save calorie item to DB
        const result = await calorieService.saveCalorieItem(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    addCalorieItem,
};
