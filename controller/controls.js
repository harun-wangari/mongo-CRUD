const {todo} =require('../model/todo')

exports.getTodos = async (req,res) => {
    res.status(200).json({message:'this is a test',todo:todo})
}

exports.createTodo = async (req,res) => {
    try {
         // let {title,description,timestamp} = req.body
        todo.push(req.body)
        res.status(200).json({msg:'new todo has been created'})
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}