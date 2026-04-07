const express = require('express')
const result = require('../util/result')

const router = express.Router()

router.post('/' , (req,res) => {
    const {} = req.body

    const sql = `ISNERT INTO xxx () VALUES ()`
    query(sql , [] , (error,data) => {})

})

module.exports = router