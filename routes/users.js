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

const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/usersController');

router.get('/:id', getUser);

module.exports = router;
