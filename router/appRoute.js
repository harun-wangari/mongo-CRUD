const route = require('express').Router()
const controller = require('../controller/controls')


route.get('/',controller.getTodos)
route.post('/',controller.createTodo)

module.exports = route