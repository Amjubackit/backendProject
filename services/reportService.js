const calorieService = require('./calorieService');

// Generate report - service layer
const generateReport = async (user_id, year, month) => {
    try {
        // Utilize calories service to get the relevant calorie items.
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
