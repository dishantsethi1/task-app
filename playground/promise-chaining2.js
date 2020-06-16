require('../src/db/mongoose')

const Task = require('../src/models/task')



// Task.findByIdAndDelete('5ee892df4c26430aef9199af').then((task) => {
//     console.log(task)
//     return Task.countDocuments({
//         completed: false
//     })
// }).then((r) => {
//     console.log(r)
// }).catch((e) => {
//     console.log(e)
// })



const update=async(id)=>{
    const task=await Task.findByIdAndDelete(id)
    const count=await Task.countDocuments({completed:false})
    return count

}
update('5ee75044814132a672625971').then((user)=>{
    console.log(user)
}).catch((e)=>{
    console.log(e)
})


