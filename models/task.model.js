const mongoose = require("mongoose")



taskShcema = mongoose.Schema({
    title:String,
    description:String,
    status:String,
    kanbanId:String,
})

let taskModel = mongoose.model("task",taskShcema)

module.exports = {taskModel}