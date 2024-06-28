const Calories = require('../models/calories');
const { v4: uuidv4 } = require('uuid');

const addCalorieItem = async (calorieData) => {
    try {
        const newCalorieItem = new Calories({
            id: uuidv4(), // Unique id for calorie item
            ...calorieData, // Unpack body into new object to merge with id
        });
        await newCalorieItem.save();
        return { message: 'Calorie item added successfully' };
    } catch (err) {
        throw new Error(err.message);
    }
};

const getCaloriesByUserAndDate = async (user_id, year, month) => {
    try {
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
