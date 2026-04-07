const express = require("express")
const cors = require("cors")


const app = express()

app.get('/' , (req,res) => {
    res.send('dummy up')
})

app.listen(4000 , 'localhost' , () => {
    console.log("Server Started At Post 4000")
})