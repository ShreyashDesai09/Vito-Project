const express = require("express");
const cors = require('cors');
const userRouter = require('./route/user');
const loanRouter = require('./route/loan');
const decisionRouter = require('./route/decision');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', userRouter);
app.use('/loan', loanRouter);
app.use('/decision', decisionRouter);

app.listen(4000, () => {
    console.log("Server running on port 4000");
});