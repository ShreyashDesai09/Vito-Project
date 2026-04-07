const express = require("express")
const cors = require('cors')
const applicantRouter = require('./route/applicant')
const loanRouter = require('./route/loan')
const decisionRouter = require('./route/decision')

const app = express()


app.use(cors())
app.use(express.json())

app.use('/applicant' , applicantRouter)
app.use('/loan' , loanRouter)
app.use('/decision' , decisionRouter)



app.get('/' , (req,res) => {
    res.send('dummy up')
})

app.listen(4000 , 'localhost' , () => {
    console.log("Server Started At Post 4000")
})