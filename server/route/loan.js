const express = require('express');
const pool = require('../db/db');
const { createResult } = require('../util/result');
const router = express.Router();

router.post('/apply', (req, res) => {
    const { applicantId, amount, tenure, purpose, status, score } = req.body;

    if (!applicantId || !amount || !tenure) {
        return res.send(createResult("Incomplete loan application data", null));
    }

    const query = `INSERT INTO Loans (applicant_id, amount, tenure, purpose, status, credit_score) VALUES (?, ?, ?, ?, ?, ?)`;
    
    pool.execute(query, [applicantId, amount, tenure, purpose, status, score], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            res.send(createResult("Failed to process loan application", null));
        } else {
            res.send(createResult(null, { applicationId: data.insertId, message: "Loan application recorded" }));
        }
    });
});

module.exports = router;