const mongoose = require("mongoose");

let studentSchema = mongoose.Schema({
    firstname : {type:String, required:[true, "firstname is compulsory"]},
    lastname : {type:String, required:true},
    email: {type:String, required:true, unique:[true]},
    password: {type:String, required:true}, 
    registrationDate : {type:String, default:Date.now()}
})

let studentModel = mongoose.model("students", studentSchema)

module.exports = studentModel