const express = require('express')
const appRoute = require('./router/appRoute')
const app = express()

app.use(express.json())
app.use('/getTodos',appRoute)
app.use('/createTodo',appRoute)

app.get('/', (req,res) => {
    res.send('the server is online')
})

app.listen('8000')