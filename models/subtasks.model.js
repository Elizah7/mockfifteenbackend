const mongoose = require("mongoose")



subtaskShcema = mongoose.Schema({
    title:String,
    status:String,
    iscompleted:Boolean,
    taskId:String
})

let subtaskModel = mongoose.model("subtask",subtaskShcema)

module.exports = {subtaskModel}