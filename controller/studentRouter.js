const mongoose = require("mongoose")
const express = require("express")
const studentSchema = require("../model/studentSchema")
const studentRouter = express.Router()

studentRouter.post("/create-student", (req, res) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return err
    } else {
      return res.json(data)
    }
  })
})
studentRouter.get("/", (req, res) => {
  studentSchema.find((err, data) => {
    if (err) {
      return err
    } else {
      res.json(data)
    }
  })
})
studentRouter
  .route("/update-student/:id")
  .get((req, res) => {
    studentSchema.findById(
      mongoose.Types.ObjectId(req.params.id),
      (err, data) => {
        if (err) {
          return err
        } else {
          res.json(data)
        }
      }
    )
  })
  .put((req, res) => {
    studentSchema.findByIdAndUpdate(
      mongoose.Types.ObjectId(req.params.id),
      { $set: req.body },
      (err, data) => {
        if (err) {
          return err
        } else {
          res.json(data)
        }
      }
    )
  })
studentRouter.delete("/delete-student/:id", (req, res) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return err
    } else {
      res.json(data)
    }
  })
})

module.exports = studentRouter

// http://localhost:4000/students ->GET
// http://localhost:4000/students/create-student + if request type is post ->POST

// Axios.post(url,pbj)
// Axios.post(http://localhost:4000/students/create-student, obj)

// req or res // req -> Request Line, Request Header, Request Body

// Axios.delete(http://localhost:4000/students/delete-student/dcs7dsd8asd7a6da8sda)
/*

_id:dcs7dsd8asd7a6da8sda(unique)
name:
email:
rollNo:

*/
