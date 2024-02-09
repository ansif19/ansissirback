// 1.importing the express
const express = require('express')
const employeeModel = require('./model')
// 2.Intialize express
const app =  new express()

//3.middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// 3.Api creation 

app.get('/',(req,res)=>{
    res.send("Message from server")
})

app.get("/trial",(req,res)=>{
    res.send("massage from trial API")
})
app.get("/data",(req,res)=>{
    res.json({"name":"jhone","Age":25})

})

app.post("/postdata",(req,res)=>{
    console.log(req.body)
    res.send("data added")
})


//api to add data to db
app.post("/add",async(req,res)=>{
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
})
//api to view data to db
app.get('/view',async(req,res)=>{
    let result = await  employeeModel.find();
    res.json(result);
})
//Deleting a data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params.id);
    let id = req.params.id
    await employeeModel.findByIdAndDelete(id);
    res.json({massage:"deleted"})
})

//to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body);
    res.send("updated")
})





//4.port
app.listen(8080,()=>{
    console.log("port 8080 is up and running")

})
