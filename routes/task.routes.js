
const express = require("express")
const { taskModel } = require("../models/task.model")
const { subtaskModel } = require("../models/subtasks.model")


const taskRouter = express.Router()

taskRouter.get("/", async (req, res) => {
    const id = req.params.id
    try {
        const totaltask = await taskModel.find({ kandbanId: id })
        const totalsubtask = await subtaskModel.find({ taskId: totaltask._id })

        res.status(200).send({ msg: "totaldata", totaltask: totaltask, totalsubtask: totalsubtask })
    } catch (error) {
        res.send({ msg: error })
    }

})




taskRouter.post("/add", async (req, res) => {
    const { title, description, subTask, status, userId } = req.body
    try {
        const newtask = new taskModel({ title, description, userId, status })
        await newtask.save()
        const findnewtask = await taskModel.findOne({ title })
        for (let i = 0; i < subTask.length; i++) {
            const newsubtask = new subtaskModel({ title: subTask[i], taskId: findnewtask._id })
            await newsubtask.save()
        }

        res.status(200).send({ msg: "data added succesfully", data: newdata })
    } catch (error) {
        res.send({ msg: error })
    }

})

taskRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id

    try {
        const newdata = await taskModel.findByIdAndUpdate(id, req.body)
        res.status(200).send({ msg: "data updated succesfully" })
    } catch (error) {
        res.send({ msg: error })
    }

})
taskRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id

    try {
        const newdata = await taskModel.findByIdAndDelete(id)
        res.status(200).send({ msg: "data deleted succesfully" })
    } catch (error) {
        res.send({ msg: error })
    }

})

module.exports = taskRouter
