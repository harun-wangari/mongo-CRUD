const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require('./router/appRoute')
const app = express()

app.use(express.json())
app.use('/Todos/',todoRoute);

app.get('/', (req,res) => {
    res.send('the server is online')
})

app.listen('8000')