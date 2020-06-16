require('../src/db/mongoose')

const User = require('../src/models/user')


//5ee75665022942b34ced1f90

// User.findByIdAndUpdate('5ee75665022942b34ced1f90', {
//     age: 1
// }).then((user) => {
//     console.log(user)
//     return User.countDocuments({
//         age: 18
//     })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateage = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age:age
    })
const count=await User.countDocuments({age})
return count
}

updateage('5ee75665022942b34ced1f90',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})