const express = require('express');
const pool = require('../db/db');
const { createResult } = require('../util/result');
const router = express.Router();

router.post('/register', (req, res) => {
    const { name, pan, businessType, monthlyRevenue } = req.body;

    if (!name || !pan || !monthlyRevenue) {
        return res.send(createResult("Missing required profile information", null));
    }

    const query = `INSERT INTO Applicants (name, pan, business_type, monthly_revenue) VALUES (?, ?, ?, ?)`;
    
    pool.execute(query, [name, pan, businessType, monthlyRevenue], (err, data) => {
        if (err) {
            console.error("Database Error:", err);
            res.send(createResult("Failed to save user profile", null));
        } else {
            res.send(createResult(null, { userId: data.insertId, message: "Profile saved successfully" }));
        }
    });
});

module.exports = router;