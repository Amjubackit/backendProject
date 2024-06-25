const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const developers = [
        {
            firstname: 'Bar',
            lastname: 'Elimelech',
            id: 313586869,
            email: 'elimelechmail@gmail.com',
        },
    ];

    res.json(developers);
});

module.exports = router;
