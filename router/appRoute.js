const route = require('express').Router()
const controller = require('../controller/controls')


route.get('/',controller.getTodos)
route.post('/',controller.createTodo)
route.post('/',controller.getOneTodo)
route.post('/',controller.updateTodo)

module.exports = route