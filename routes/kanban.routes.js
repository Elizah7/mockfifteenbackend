
const express = require("express")
const { kanbanModel } = require("../models/kanban.models")


const kanBanRouter = express.Router()

kanBanRouter.get("/",async(req,res)=>{
   const id = req.body.userId
   console.log(id)
   try { 
      const totaldata = await kanbanModel.find({userId:id})
      console.log(totaldata)
      res.status(200).send({msg:"totaldata" , data:totaldata})
   } catch (error) {
      res.send({msg:error})
   }
  
})



kanBanRouter.post("/add",async(req,res)=>{
     console.log(req.body)
  try {
       const newdata = new kanbanModel(req.body)
        await newdata.save()
        res.status(200).send({msg:"data added succesfully",data:newdata})
  } catch (error) {
     res.send({msg:error})
  }

})

kanBanRouter.patch("/add/:id",async(req,res)=>{
  const id = req.params.id
     
  try {
       const newdata = await kanbanModel.findByIdAndUpdate(id,req.body)
        res.status(200).send({msg:"data updated succesfully"})
  } catch (error) {
     res.send({msg:error})
  }

})
kanBanRouter.delete("/add/:id",async(req,res)=>{
  const id = req.params.id
     
  try {
       const newdata = await kanbanModel.findByIdAndDelete(id)
        res.status(200).send({msg:"data deleted succesfully"})
  } catch (error) {
     res.send({msg:error})
  }

})

module.exports = kanBanRouter
