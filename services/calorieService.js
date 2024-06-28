const Calories = require('../models/calorie');
const { v4: uuidv4 } = require('uuid');

// Add calorie item to database - service layer
const addCalorieItem = async (calorieData) => {
    try {
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
const getCaloriesByUserAndDate = async (user_id, year, month) => {
    try {
        // Utilize calorie model to find relevant calorie items
        const calories = await Calories.find({ user_id, year, month });
        return calories;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    addCalorieItem,
    getCaloriesByUserAndDate,
};
