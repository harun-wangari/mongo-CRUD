const route = require('express').Router()
const controller = require('../controller/controls')

route.use((req,res,next) => {
    next()
})

route.get('/getTodos',controller.getTodos);
route.post('/createTodo',controller.createTodo);
route.post('/getOneTodo',controller.getOneTodo);
route.post('/updateTodo',controller.updateTodo);
route.post('/deleteTodo',controller.deleteTodo);

module.exports = route