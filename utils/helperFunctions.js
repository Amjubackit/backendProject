const fs = require('fs');

// Helper function to load json file and return json object
const loadJson = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

module.exports = { loadJson };
