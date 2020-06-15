const mongoose = require('mongoose')
const validator=require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        validate(value)
        {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cant contain password in it')
            }
        }

    },
    age: {
        type:Number,
        default:18,
        validate(value){
            if(value<0) {
                throw new Error('Age must be positive no')
            }
        }

    }
})

// const me=new User({
//     name:'Aujla karan ',
//     email:'dishantsethi@gamil.com',
//     password:'karanaujlaisbest'
   
// })




// me.save().then(()=>{
// console.log(me)
// }).catch((error)=>{
// console.log(error)
// })


const Task=mongoose.model('Task',{
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
})


// const task=new Task({
//     description:'         karan aujla is best            '
    
// })



// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })