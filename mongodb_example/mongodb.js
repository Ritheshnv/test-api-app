
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // Inserting to MongoDB-------------------------------------------

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Shetty',
    //     age: 23
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Prepare fund list',
    //         completed: true
    //     }, {
    //         description: 'Get new funds from somewhere',
    //         completed: false
    //     }, {
    //         description: 'Dont go, no funds',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //        return console.log('Unable to connect')
    //     }
    //     console.log(result.ops)
    // })

    // Reading from Mongodb ----------------------------------------------------------------

    // db.collection('tasks').findOne({ _id: ObjectID("5f01e55d14178d8324b15436") }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log('Last task: ', result)
    // })

    // db.collection('users').find({age: 23}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 23}).count((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, tasks) => {
    //     console.log('Tasks not Completed: ', tasks)
    // })

    //Update MongoDB --------------------------------------------------------------------------------

    // const updatePromise = db.collection('users').updateOne(
    //     { _id: new ObjectID("5f01e7fa54513f82784b3238") }, {
    //     $set: {
    //         name: 'Tiger'
    //     },
    //     $inc: {
    //         age: 2
    //     }
    // })

    // updatePromise.then(res => {
    //     console.log(res);
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection('tasks')
    //     .updateMany({completed: false}, { $set: { completed: true } })
    //     .then(res => { console.log(res) })
    //     .catch(error => { console.log(error) })

    // Delete from Mongodb --------------------------------------------------------------------------------

    // db.collection('tasks')
    // .deleteOne({description: "Dont go, no funds"})
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

    // db.collection('users')
    // .deleteMany({
    //     age:23
    // })
    // .then(res => console.log(res))
    // .catch(error => console.log(error))

})