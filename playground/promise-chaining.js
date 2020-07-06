require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5f0250192205aa436cf25fb8')
    .then(task => {
        console.log(task)
        return Task.countDocuments({completed: false})
    })
    .then(res => {
        console.log('No. of incompleted tasks: ',res)
    })
    .catch(err => {
        console.log(err)
    })