const express = require('express')
const pool = require('../db/db')
const result = require('../util/result')

const router = express.Router()

router.get('/' , (req,res) => {
    res.send("User")
})


module.exports = router