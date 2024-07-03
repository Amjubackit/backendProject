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

const reportService = require('../services/reportService');

// Get report - controller layer
const getReport = async (req, res) => {
    try {
        // Unpack query parameters
        const { user_id, year, month } = req.query;
        // Utilize report service layer to generate report
        const report = await reportService.generateReport(user_id, year, month);
        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getReport };
