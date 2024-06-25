var express = require('express');
var router = express.Router();

/* GET catalog listing. */
router.get('/', function (req, res) {
    res.send('ADD CALORIES');
});

module.exports = router;
