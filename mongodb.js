const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient

const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'


MongoClient.connect(connectionURL,{useUnifiedTopology: true},(error,client)=>{
if(error){ return console.log('Unabel to connect to database')}

const db=client.db(databaseName)

// db.collection('users').insertOne({
//     name:'Dishant Sehti',
//     age:18
// },(error,result)=>{
// if(error)
// {
//     return console.log('inserted correctly')   
// }
// console.log(result.ops)
// })


// db.collection('users').insertMany([{
// name:'jen',
// age:28
// },{
//     name:'ji',
//     age:29
// }],(error,result)=>{
//     if(error) return console.log('not done')

//     console.log(result.ops)
// })

db.collection('tasks').insertMany([{
    description:'hi i am dishant',
    completed:true
},
{
    description:'hi i am jen',
    completed:true
},{
    description:'hi i am ji',
    completed:false
}],(error,result)=>{
    if(error) return console.log('not done')

    console.log(result.ops)
})

})