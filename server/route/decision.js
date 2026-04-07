const express = require('express');
const { createResult } = require('../util/result');
const router = express.Router();

router.post('/', (req, res) => {
    const { monthlyRevenue, loanAmount } = req.body;
    const annualIncome = parseFloat(monthlyRevenue) * 12;
    const maxLoanLimit = annualIncome * 0.30;

    let score = 750;
    let decision = "Approved";
    let reasons = ["Loan amount is within 30% of annual income"];

    if (parseFloat(loanAmount) > maxLoanLimit) {
        score = 350;
        decision = "Rejected";
        reasons = [`Requested amount exceeds 30% annual income limit of ${maxLoanLimit.toFixed(0)}`];
    }

    res.send(createResult(null, { decision, score, reasons }));
});

module.exports = router;