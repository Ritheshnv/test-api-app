require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f0250192205aa436cf25fb8')
//     .then(task => {
//         console.log(task)
//         return Task.countDocuments({completed: false})
//     })
//     .then(res => {
//         console.log('No. of incompleted tasks: ',res)
//     })
//     .catch(err => {
//         console.log(err)
//     })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('').then(res => {
    console.log(res)
}).catch(e => console.log(e))