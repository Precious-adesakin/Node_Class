console.log("Welcome to node");

const express= require("express")
const mongoose = require("mongoose");

const ejs = require("ejs")
require('dotenv').config()

const app=express();

var PORT=5000

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

URI = "mongodb+srv://Precious08:Preciouspass@cluster0.vou3puq.mongodb.net/schoolPortal_db?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).then(()=>{
    console.log("Eeeyaahhh Mongodb connected successfully");
}).catch((err)=>{
    console.log("Mongodb did not connect successfully");
    console.log(err);
})


let studentSchema = mongoose.Schema({
    firstname : {type:String, required:[true, "firstname is compulsory"]},
    lastname : {type:String, required:true},
    email: {type:String, required:true, unique:[true]},
    password: {type:String, required:true}, 
    registrationDate : {type:String, default:Date.now()}
})

let studentModel = mongoose.model("students", studentSchema)
let allStudents = []
app.get("/",(req,res)=>{
    res.render(index)
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to the about page")
})
app.get("/dashboard",(req,res)=>{
    studentModel.find().then((students)=>{
        console.log(students);
        res.render("dashboard",{students})
    }).catch((err)=>{
    console.log(err);
    })
})
// app.get(path,callback)
app.post("/register",(req,res)=>{
    // console.log("Somebody made a post request to slash register")
    // allStudents.push(req.body)
    // res.redirect("/dashboard")\
    let form = studentModel(req.body)  
    form.save().then(()=>{
        console.log("Data saved successfully");
        res.redirect("/dashboard")
    }).catch((err)=>{
        console.log("data did not save");
        console.log(err);
    })
})

app.post("/deletestudent",(req,res)=>{
    let id=req.body.id
    studentModel.findByIdAndDelete(id).then(()=>{
        console.log("student deleted successfully");
        res.redirect("/dashboard")
    }).catch((err)=>{
        console.log("student deleted unsuccessfully");
        console.log(err);
    })
})
app.listen(PORT,(err)=>{
    if(err){
        console.log("Server no gree start");
    }else{
        console.log("Server started successfully");
    }
    })

