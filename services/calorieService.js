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

const Calories = require('../models/calorie');
const { findUserById } = require('./userService');
const { v4: uuidv4 } = require('uuid');

// Save calorie item in database - service layer
const saveCalorieItem = async (calorieData) => {
    try {
        // Make sure such user exists first.
        // Prevents adding calorie item to a non-existing user.
        const { user_id } = calorieData;
        await findUserById(user_id);
        // Create new calorie item based on data & generated ID
        const newCalorieItem = new Calories({
            // Unique id for calorie item
            id: uuidv4(),
            // Unpack body into new object to merge with id
            ...calorieData,
        });
        // Save the item in database
        await newCalorieItem.save();
        return { message: 'Calorie item added successfully' };
    } catch (err) {
        throw new Error(err.message);
    }
};

// Get calories data by user and date (year & month) - service layer
const findCaloriesByUserAndDate = async (user_id, year, month) => {
    try {
        // Utilize calorie model to find relevant calorie items
        const calories = await Calories.find({ user_id, year, month });
        return calories;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    saveCalorieItem,
    findCaloriesByUserAndDate,
};
