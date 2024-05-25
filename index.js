console.log("Welcome to node");

const express= require("express")
const mongoose = require("mongoose");

const ejs = require("ejs")
require('dotenv').config()

const app=express();

var PORT=5000

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

MONGO_DB_URI = "mongodb+srv://Precious08:Preciouspass@cluster0.vou3puq.mongodb.net/schoolPortal_db?retryWrites=true&w=majority&             appName=Cluster0"

mongoose.connect(process.env.URI).then(()=>{
    console.log("Mongodb connected successfully");
}).catch((err)=>{
    console.log("Mongodb did not connect successfully");
    console.log(err);
})


let studentSchema = mongoose.Schema({
    firstname : {type:String, required:true},
    lastname : {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true}, 
    registrationDate : {type:String, default:Date.now()}
})

let studentModel = mongoose.model("students", studentSchema)
let allStudents = []
app.get("/",(req,res)=>{
    // res.sendFile(__dirname+"index.html")
    res.render(index)
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to the about page")
})
app.get("/dashboard",(req,res)=>{
    res.render("dashboard",{myName:"Precious",allStudents})
})
// app.get(path,callback)
app.post("/register",(req,res)=>{
    // console.log("Somebody made a post request to slash register")
    // allStudents.push(req.body)
    // res.redirect("/dashboard")\
    studentModel(req.body)
})
app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log("Server no gree start");
    }else{
        console.log("Server started successfully");
    }

    })

