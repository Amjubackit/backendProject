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

// Middleware function that validates getReport parameters before calling the service layer
const validateGetReportParams = (req, res, next) => {
    const requiredParams = ['user_id', 'year', 'month'];

    // Setup new array with missing parameters
    const missingParams = requiredParams.filter(
        (param) => req.query[param] === undefined
    );

    // If there are any missing params, reject with code status 400.
    if (missingParams.length > 0) {
        const message = `Missing required query parameters: ${missingParams.join(', ')}`;
        return res.status(400).json({ message });
    }

    next();
};

module.exports = { validateGetReportParams };
