let studentModel = require(".../models/student.model.js")

const displayIndex = (req,res)=>{
    res.render("index")
}
const displaySignup = (req,res)=>{
    res.render("signup")
}
const getAbout = (req,res)=>{
    res.send("Welcome to the about page");
}
const getDashboard = (req,res)=>{
    studentModel.find().then((students)=>{
        console.log(students);
        res.render("dashboard",{students});
    }).catch((err)=>{
        console.log(err);
        })
}
const registerStudent =(req,res)=>{
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
}
const deleteStudent = (req,res)=>{
    let id=req.body.id
    studentModel.findByIdAndDelete(id).then(()=>{
        console.log("student deleted successfully");
        res.redirect("/dashboard")
    }).catch((err)=>{
        console.log("student deleted unsuccessfully");
        console.log(err);
    })
}

module.exports = {displayIndex, displaySignup, getAbout, getDashboard, registerStudent, deleteStudent}