const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('Users');
});

/* GET user by ID. */
router.get('/:id', getUser);

module.exports = router;
