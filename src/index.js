const express = require('express')
require('./db/mongoose')

const userrouter = require('./routers/user')
const taskrouter = require('./routers/task')
const jwt = require('jsonwebtoken')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userrouter)
app.use(taskrouter)

app.listen(port, () => {
    console.log('Server is running on port 3000')
})

const bcrypt = require('bcryptjs')

const myfunction = async () => {
    const token = jwt.sign({
        _id: 'abcdsa23'
    }, 'learningnodejs',{expiresIn:'1 seconds'})
    console.log(token)
    const data=jwt.verify(token,'learningnodejs')
    console.log(data)
}
myfunction()