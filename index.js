const express = require('express')
const mongoose = require('mongoose')
const appRoute = require('./router/appRoute')
const app = express()

app.use(express.json())
app.use('/getTodos',appRoute)
// app.use('/createTodo',appRoute)
app.use('/getOneTodo',appRoute)
app.use('/updateTodo',appRoute)

app.get('/', (req,res) => {
    res.send('the server is online')
})

app.listen('8000')