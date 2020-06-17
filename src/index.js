const express = require('express')
require('./db/mongoose')

const userrouter=require('./routers/user')
const taskrouter=require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userrouter)
app.use(taskrouter)

app.listen(port, () => {
    console.log('Server is running on port 3000')
})

const bcrypt=require('bcryptjs')

const myfunction=async()=>{
const pass='sfkslflaskf'
const hash=await bcrypt.hash(pass,8)

console.log(pass)
console.log(hash)


const ismatch=await bcrypt.compare(pass,hash)
console.log(ismatch)
}
myfunction()