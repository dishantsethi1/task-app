const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})



// const me=new User({
//     name:'sethi ',
//     email:'dishantsethi222@gamil.com',
//     password:'karanaujlaisbestandwillbe'

// })




// me.save().then(()=>{
// console.log(me)
// }).catch((error)=>{
// console.log(error)
// })





// const task=new Task({
//     description:'         karan aujla is best            '

// })



// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })