const calorieService = require('./calorieService');

const generateReport = async (user_id, year, month) => {
    try {
        // Get matched calories via calorieService
        const calories = await calorieService.getCaloriesByUserAndDate(
            user_id,
            year,
            month
        );

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

        return report;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    generateReport,
};
