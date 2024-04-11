const Student = require('../models/student')
const Teacher = require('../models/teacher')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const Book = require('../models/books')
const _ = require("lodash");

 const registerStudent = async (req, res) => {
    try {
       const errors = validationResult(req)
        if(!errors.isEmpty()) {
         return res.status(400).json({errors: errors.array()})
        } 

        const {email} = req.body
        const existingStudent = await Student.findOne({ email })
        // console.log(existingStudent)

        if(existingStudent) return res.status(409).json({errors: [{msg: 'User Already Exist!'}]})

        const student = new Student({...req.body})
        // console.log(student)
        
        await student.save()
        const token = student.generateAuthToken()
        res.status(201).send({result: student, token})
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const getStudent = async (req, res) => {
    try {
     const students = await Student.find({_id: req.student.id})
     res.status(200).json(students)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
} 

const loginStudent = async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        
        const student = await Student.findByCredentials(req.body.email, req.body.password)
        const token = await student.generateAuthToken()
        res.status(200).send({result: student, token, userType: 'student'})
    }catch(error) {
        res.status(400).send({error: error.message})
    }
}


const updateStudent = async (req, res) => {
    console.log(req.body)
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName', 'lastName', 'email', 'password', 'phone']
    // console.log(updates)
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid Operation'})
    }

    try{
        updates.forEach((update) => req.student[update] = req.body[update])

        await req.student.save()
        res.send(req.student)
    } catch(e) {
        res.status(400).send(e)
    }
}

const addTeacherById = async(req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id)
        if(!teacher) {
            res.status(404).send({error: 'Teacher Not Found!'})
        } 
        const student = await Student.findById({_id: req.student.id})
        // console.log(student)
        if(student.teachers.includes(teacher._id)) {
            return res.status(409).send({error: 'Already added!'})
        }
        student.teachers.unshift(teacher)
        teacher.students.unshift(student)
        await student.save()
        await teacher.save()
        res.status(200).send({result: student})
    } catch(error) {
        console.log(error)
    }
}

const getTeachers = async(req, res) => {
    try {
        const student = await Student.findOne({_id: req.student.id})
        if(!student) {
            return res.status(404).send({error: 'Student Not Found'})
        }

        await student.populate('teachers').execPopulate()
        res.send({result : student.teachers})
    } catch(error) {
        res.status(400).send({error: error})
    }
}

const getAllStudents = async(req, res) => {
    try {
        const students = await Student.find({})
        res.status(200).send(students)
    } catch(error) {
        res.status(400).send({error: error})
    }
}

const getBooks = async(req,res) => {
    let gotBooks = []
    try {
        const student = await Student.findOne({_id: req.student.id})
        await student.populate('teachers').execPopulate()
        for(teacher of student.teachers){
            await teacher.populate('books').execPopulate()
            for(book of teacher.books){
                gotBooks.push(book)
            }
        }
        res.send(gotBooks)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const getMaterials = async(req,res) => {
    let gotMaterials = []
    try {
        const student = await Student.findOne({_id: req.student.id})
        await student.populate('teachers').execPopulate()
        for(teacher of student.teachers){
            await teacher.populate('materials').execPopulate()
            for(material of teacher.materials){
                gotMaterials.push(material)
            }
        }
        res.send(gotMaterials)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const getClasses = async (req, res) => {
    let gotclasses = []
    try {
        const student = await Student.findOne({_id: req.student.id})
        await student.populate('teachers').execPopulate()
        for(teacher of student.teachers){
            await teacher.populate('classes').execPopulate()
            for(classes of teacher.classes){
                gotclasses.push(classes)
            }
        }
        res.send(gotclasses)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const dissmissTeachers = async(req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id)
        if(!teacher) {
            return res.status(404).send({error: 'Teacher Not Found!'})
        }
        await Student.updateOne({_id: req.student._id}, {$pull: {'teachers': req.params.id}})
        await Teacher.updateOne({_id: req.params.id}, {$pull: {'students': req.student._id}})
        res.status(200).send(teacher)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { body } = req;

        if(_.isEmpty(body.email) || _.isEmpty(body.password)) {
            throw new Error('Email or Password required!')
        }

        const student = await Student.findOne({email: body.email})
        if(!student) {
            return res.status(404).send({error: 'Student Not Found!'})
        }

        const password = await bcrypt.hash(body.password, 8);
        await Student.updateOne({ email: body.email }, { password });
        const updatedStudent = await Student.findOne({email: body.email});
        res.status(200).send(updatedStudent)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = {
    registerStudent,
    getStudent,
    updateStudent,
    loginStudent,
    addTeacherById,
    getTeachers,
    getBooks,
    getMaterials,
    getClasses,
    dissmissTeachers,
    forgotPassword,
    getAllStudents
}