const Calories = require('../models/calories');

// Add calories service function
const addCalorie = async (data) => {
    const newCalorie = new Calories(data);
    await newCalorie.save();
    return newCalorie;
};

// Fetch calorie items by user id and date
async function getCaloriesByUserAndDate(user_id, year, month) {
    const calories = await Calories.find({ user_id, year, month });
    return calories;
}

module.exports = {
    addCalorie,
    getCaloriesByUserAndDate,
};
