const mongoose = require('mongoose')
const connnectionString = 'mongodb://localhost:27017/todoDB'
// exports.todo = [] 

const connectDB = () => {
    mongoose.connect(connnectionString,{
        useUnifiedTopology:true
    }).then(() => {
        console.log('connected to database')
    }).catch((error) => {
        console.error('database coonection failed:'+error)
    })
}

module.exports = connectDB