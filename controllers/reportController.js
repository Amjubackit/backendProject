const reportService = require('../services/reportService');

const getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;
        const report = await reportService.generateReport(user_id, year, month);
        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getReport };
