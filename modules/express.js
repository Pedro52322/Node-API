const express = require("express")
const usersModel = require("../src/models/user.model")
const app = express()
app.use(express.json())

app.use((req, res, next)=>{
    console.log(req.body)
    next()
})

app.get("/users", async (req, res)=>{
   try {
    const users = await usersModel.find({})
    res.status(200).json(users);
   } catch (error) {
    return res.status(500).send(error.message)
   }
})

app.get("/users/:id", async (req, res)=>{
    try {
     const id = req.params.id
     const user = await usersModel.findById(id)
     return res.status(200).json(user)
    } catch (error) {
     return res.status(500).send(error.message)
    }
 })

app.post("/users", async (req,res)=>{
    try{
        const user = await usersModel.create(req.body)
        res.status(201).json(user);
    }catch (error){
        res.status(500).send(error.message);
    }
    
})

app.patch("/users/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await usersModel.findByIdAndUpdate(id, req.body, {new : true})
        return res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.delete("/users/:id", async (req, res)=>{
    try {
        const id = req.params.id
        const user = await usersModel.findByIdAndRemove(id)
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
})
const port = 80
app.listen(port, ()=> console.log(`Rodando com Explress na porta ${port}!`))