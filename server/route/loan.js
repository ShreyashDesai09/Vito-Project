const express = require('express');
const pool = require('../db/db');
const { createResult } = require('../util/result');
const router = express.Router();

router.post('/apply', (req, res) => {
    const { userId, amount, tenure, purpose, status, score } = req.body;
    const query = `INSERT INTO Loans (user_id, amount, tenure, purpose, status, credit_score) VALUES (?, ?, ?, ?, ?, ?)`;
    pool.execute(query, [userId, amount, tenure, purpose, status, score], (err, data) => {
        res.send(createResult(err, data));
    });
});

module.exports = router;