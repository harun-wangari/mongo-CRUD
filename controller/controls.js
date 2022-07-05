const mongoose = require('mongoose')
const connectDB = require('../model/todo')
// const {todo} =require('../model/todo')
const {Schema} = mongoose
connectDB()

const todoSchema = new Schema({
    title: String,
    description:String,
    timestamp: String
})

const Todo = mongoose.model('Todo',todoSchema)


exports.getTodos = async (req,res) => {
    Todo.find({}, (err,todos) => {
        if(err){
            console.error(err)
        }else{
            res.status(200).json({todos:todos})
        }
    })
   
};

exports.getOneTodo = async (req,res) => {
    Todo.findById(req.body.id, (err,todo) => {
        if(err){
            console.error(err)
        }else{
            res.status(200).json({todo:todo})
        }
    })
   
};

exports.updateTodo = async (req,res) => {
    Todo.findByIdAndUpdate(req.body.id,{title:req.body.title,description:req.body.description,timestamp:req.body.timestamp}, (err) => {
        if(err){
            console.error(err) 
        }else{ 
            res.status(200).json({msg:'todo updated'})
        }
    })
   
};

exports.createTodo = async (req,res) => {
    try {
       Todo.create(req.body,(err,todo) => {
            if(err){
                console.error(' todo not added: ',err) 
            }else{
                res.status(200).json({msg:'new todo has been created: ',todo:todo})
            }
       })
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};

exports.deleteTodo = async (req,res) => {
    try {
       Todo.findByIdAndRemove(req.body.id,(err,todo) => {
            if(err){
                console.error(' todo not deleted: ',err) 
            }else{
                res.status(200).json({msg:'todo has been Deleted: '})
            }
       })
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
};