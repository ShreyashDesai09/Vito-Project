const express = require('express');
const { createResult } = require('../util/result');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        const { monthlyRevenue, loanAmount } = req.body;

        const monthlyRev = parseFloat(monthlyRevenue);
        const requestedLoan = parseFloat(loanAmount);
        
        // Calculate Annual Income
        const annualIncome = monthlyRev * 12;

        // Define Max Loan Limit (30% of Annual Income)
        const maxLoanLimit = annualIncome * 0.30;

        let score = 500; 
        let reasons = [];
        let decision = "Approved";

        // Apply the 30% Rule Logic
        if (requestedLoan > maxLoanLimit) {
            decision = "Rejected";
            score = 350;
            reasons.push(`Loan request (${requestedLoan}) exceeds 30% of annual income (${maxLoanLimit.toFixed(2)})`);
        } else {
            score = 750;
            reasons.push("Loan amount is within the safe 30% annual income threshold");
        }

        // Additional small check: Minimum Revenue
        if (monthlyRev < 10000) {
            decision = "Rejected";
            reasons.push("Monthly revenue is too low for current lending criteria");
        }

        res.send(createResult(null, { 
            decision, 
            score, 
            reasons,
            maxEligibleAmount: maxLoanLimit 
        }));
        
    } catch (error) {
        res.send(createResult(error.message, null));
    }
});

module.exports = router;