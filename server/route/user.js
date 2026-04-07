const express = require('express');
const pool = require('../db/db');
const { createResult } = require('../util/result');
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, pan, businessType, monthlyRevenue } = req.body;
    const query = `INSERT INTO User (name, pan, business_type, monthly_revenue) VALUES (?, ?, ?, ?)`;
    pool.execute(query, [name, pan, businessType, monthlyRevenue], (err, data) => {
        res.send(createResult(err, data ? { userId: data.insertId } : null));
    });
});

module.exports = router;