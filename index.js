const mongoose = require("mongoose")
const express = require("express")
const studentRoute = require("./controller/studentRouter")
const cors = require("cors")
const bodyParser = require("body-parser")

// MongoDB Atlas Connection
mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://test:12345@cluster0.gtc3ik0.mongodb.net/schooldb")
var db = mongoose.connection
db.on("open", () => console.log("Connected to DB"))
db.on("error", () => console.log("Error occured"))

// Creating an app
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use("/students", studentRoute)

// Listening to a port number
app.listen(4000, () => {
  console.log("Server started at 4000")
})
