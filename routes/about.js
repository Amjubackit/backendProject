const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.render('index', { title: 'About' });
});

module.exports = router;
