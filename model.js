const mongoose = require('mongoose')

//connection

mongoose.connect("mongodb+srv://ansif703499:ansif123@cluster0.oedltxj.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected")
})
.catch(err => console.log(err))

let mongooSchema = mongoose.Schema

const EmployeeSchema =  new mongooSchema({
    ename:String,
    eage:Number,
    epositon:String,
    esalary:Number
})

var employeeModel = mongoose.model('employee', EmployeeSchema)
module.exports = employeeModel