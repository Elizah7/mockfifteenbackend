const mongoose = require("mongoose")



kanbanShcema = mongoose.Schema({
    title:String,
    userId :String
})

let kanbanModel = mongoose.model("post",kanbanShcema)

module.exports = {kanbanModel}