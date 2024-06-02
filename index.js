console.log("Welcome to node");
const express= require("express")
// const nodemailer = require("nodemailer")
let studentRouter = require("./routes/student.route.js")
const mongoose = require("mongoose");
const ejs = require("ejs")
require('dotenv').config()
const app=express();
var PORT=5000
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/students", studentRouter)

URI = "mongodb+srv://Precious08:Preciouspass@cluster0.vou3puq.mongodb.net/schoolPortal_db?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).then(()=>{
    console.log("Eeeyaahhh Mongodb connected successfully");
}).catch((err)=>{
    console.log("Mongodb did not connect successfully");
    console.log(err);
})


app.listen(PORT,(err)=>{
    if(err){
        console.log("Server no gree start");
    }else{
        console.log("Server started successfully");
    }
    })

