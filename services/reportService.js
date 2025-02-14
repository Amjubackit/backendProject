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

const calorieService = require('./calorieService');
const { findUserById } = require('./userService');

// Generate report - service layer
const generateReport = async (user_id, year, month) => {
    try {
        // Make sure such user exists first.
        await findUserById(user_id);
        // Utilize calories service to get the relevant calorie items.
        const calories = await calorieService.findCaloriesByUserAndDate(
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
