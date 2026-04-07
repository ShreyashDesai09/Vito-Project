const express = require('express')
const result = require('../util/result')

const router = express.Router()



router.get('/' , (req,res) => {
    res.send("Loan")
})

module.exports = router