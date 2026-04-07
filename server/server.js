const express = require("express")
const cors = require('cors')
const userRouter = require('./route/user')
const homeRouter = require('./route/home')
const loanRouter = require('./route/loan')
const decisionRouter = require('./route/decision')

const app = express()


app.use(cors())
app.use(express.json())

app.use('/' , homeRouter)
app.use('/user' , userRouter)
app.use('/loan' , loanRouter)
app.use('/decision' , decisionRouter)



app.listen(4000 , 'localhost' , () => {
    console.log("Server Started At Post 4000")
})