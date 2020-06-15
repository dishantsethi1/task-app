const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unabel to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id:new ObjectID('5ee73d926322d67fc5a838c7')},(error,user)=>{
    // if(error) return console.log('unable to find')
    // else 
    // console.log(user)
    // })


    // db.collection('tasks').findOne({_id:new ObjectID('5ee5ff2ed86e7d38d3ac847e')},(error,user)=>{
    // if(error) return console.log('unable to find')
    // else
    // console.log(user)
    // })

    // db.collection('tasks').find({completed:true}).toArray((error,user)=>{
    //     console.log(user)
    // })

    // const updatepromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5ee73d926322d67fc5a838c7')
    // }, {
    //     $set: {
    //         name: 'Karan aujla'
    //     }
    // })
    // updatepromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed:true
    // },{
    //     $set:{
    //     completed:false
    // }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    // db.collection('users').deleteMany({
    //     age:20
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description:'hi i am ji'
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })





})