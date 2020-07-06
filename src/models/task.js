const mongoose =  require('mongoose')


const Task = mongoose.model('Tasks', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const task = new Task({
//     description: 'Eating outside'
// })

// task.save().then(res => console.log('Success', res)).catch(error => console.log(error))


module.exports = Task