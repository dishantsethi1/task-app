const express = require('express')
require('./db/mongoose')

const userrouter = require('./routers/user')
const taskrouter = require('./routers/task')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 3000


// app.use((req,res,next)=>{
// if(req.method==='GET'){
// res.send('Get requests are disabeld')
// }
// else{
//     next()
// }
// })

// app.use((req,res,next)=>{

//         res.status(503).send('Under maintainence')
// })

app.use(express.json())
app.use(userrouter)
app.use(taskrouter)

app.listen(port, () => {
    console.log('Server is running on port 3000')
})

const bcrypt = require('bcryptjs')

// const myfunction = async () => {
//     const token = jwt.sign({
//         _id: 'abcdsa23'
//     }, 'learningnodejs',{expiresIn:'1 seconds'})
//     console.log(token)
//     const data=jwt.verify(token,'learningnodejs')
//     console.log(data)
// }
// myfunction()


const Task = require('./models/task')
const User=require('./models/user')
const main = async function () {
    // const task=await Task.findById('5eec8be58c4fe5321095be58')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)


    const user=await User.findById('5eec8b09056b6a2aba76ff8f')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}
main()