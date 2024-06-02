const express = require("express")
const router = express.Router()
let  {displayIndex, displaySignup, getAbout, getDashboard, registerStudent, deleteStudent} = require("../controllers/student.controller.js")
router.get("/", displayIndex)
router.get("/signup", displaySignup)
router.get("/about", getAbout)
router.get("/dashboard", getDashboard)
// router.get("/sendMail", sendMail)
router.get("/register", registerStudent)
router.get("/deleteStudent", deleteStudent)

module.exports = router

