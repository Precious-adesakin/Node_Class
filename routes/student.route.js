const express = require("express")
const router = express.Router()
let  {displayIndex, displaySignup, getAbout, getDashboard, registerStudent, deleteStudent, sendMail} = require(".../controller/student.controller.js")
router.get("/", displayIndex)
router.get("/signup", displaySignup)
router.get("/about", getAbout)
router.get("/dashboard", getDashboard)
router.get("/register", registerStudent)
router.get("/deletestudent", deleteStudent)

module.exports = router
