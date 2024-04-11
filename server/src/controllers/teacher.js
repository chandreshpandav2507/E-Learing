const { validationResult } = require('express-validator')
const nodeMailer = require('nodemailer');
const Teacher = require('../models/teacher')
const Book = require('../models/books')
const Student = require('../models/student')
const Material = require('../models/material')
const QueryModel = require('../models/query')
const bcrypt = require("bcryptjs");
const _ = require('lodash');;

//Register Teacher POST request 
 const registerTeacher = async (req, res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }

        const {email} = req.body
        const existingTeacher = await Teacher.findOne({ email })
        // console.log(existingTeacher)

        if(existingTeacher) return res.status(409).json({errors: [{msg: 'Teacher Already Exist!'}]})

        const teacher = new Teacher({...req.body})
        // console.log(teacher)
        
        await teacher.save()
        const token = teacher.generateAuthToken()
        res.status(201).send({result: teacher, token})
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

//Login Teacher:  POST request 
const loginTeacher = async (req, res) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        const teacher = await Teacher.findByCredentials(req.body.email, req.body.password);
        const token = await teacher.generateAuthToken()
        res.status(200).send({result: teacher, token, userType: 'teacher'})
    }catch(error) {
        res.status(400).send({error: error.message})
    }
}

//Get Teacher Profie: GET request
const getTeacher = async (req, res) => {
    try {
     const teacher = await Teacher.find({_id: req.teacher.id});
     res.status(200).send(teacher)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}  

//Get All the teachers: GET request
const getAllTeachers = async (req, res) => {
    try{
        const teachers = await Teacher.find({})
        res.status(200).send(teachers)
    } catch(error) {
        res.status(404).send({error: error.messsage})
    }
}


//Get Teacher by its id
const getTeacherById = async(req, res) => {
    try{
        const id = req.params.id
        const teacher = await Teacher.findById(id)
        if(!teacher) {
            res.status(404).send({error: 'Teacher not found!'})
        }
        
        res.status(200).send(teacher)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
} 

//GET connected students 
const getStudents = async(req, res) => {
    try {
        const teacher = await Teacher.findOne({_id: req.teacher.id})
        // console.log(teacher)
        if(!teacher) {
            return res.status(404).send({error: 'Teacher not found!'})
        }
        await teacher.populate('students').execPopulate()
        // console.log(teacher)
        res.status(200).send(teacher.students)
    } catch(error) {
        res.status(404).send(error)
    }
} 

const addBook = async(req, res) => {
    try {
        var bookImage = req.files.image;
        var bookDocument = req.files.document;
    
        var book = new Book({
            ...req.body,
            image: bookImage.data,
            document: bookDocument.data,
            createdBy: req.teacher.id
        })
        // console.log(book)
        const teacher = await Teacher.findOne({_id: req.teacher.id})
        teacher.books.unshift(book._id)
        await teacher.populate('students').execPopulate()
        teacher.students.map(async student => {
            const newStudent = await Student.findOne({_id: student._id})
            // console.log(newStudent)
            newStudent.books.unshift(book._id)
            newStudent.save()
        })
        book.save()
        teacher.save()
        console.log("Created Book----", book);
        res.send(book)
    } catch(error) {
        res.status(400).send({error: error})
    }
}

const getBooks = async(req, res) => {
    try {
        const teacher = await Teacher.findOne({_id: req.teacher.id})
        if(!teacher) {
            return res.send({error: 'Teacher not Found!'})
        }
        await teacher.populate('books').execPopulate()
        res.status(200).send(teacher.books)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const addMaterial = async(req, res) => {
    try {
        var materialDocument = req.files.document;
    
        var material = new Material({
            ...req.body,
            document: materialDocument.data,
            createdBy: req.teacher.id
        })

        const teacher = await Teacher.findOne({_id: req.teacher.id})
        teacher.materials.unshift(material._id)

        material.save()
        teacher.save()
        res.status(201).send(material)

    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const removeStudent = async(req, res) => {
    try {
        const student = await Student.findById(req.params.id)
        if(!student) {
            return res.status(404).send({error: 'Student Not Found!'})
        }
        await Teacher.updateOne({_id: req.teacher._id}, {$pull: {'students': req.params.id}})
        await Student.updateOne({_id: req.params.id}, {$pull: {'teachers': req.teacher._id}})
        res.status(200).send(student)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const sendEmail = async (req, res) => {
    try {
        const email = req.body.email;
        const content = req.body.content;

        const mail = nodeMailer.createTransport({
           host: 'smtp.yahoo.com',
           port: 465,
           secure: false,
           auth: {
               user: 'rkelectronics02@yahoo.com',
               pass: '9825981807',
           }
        });

        console.log('mail---', mail);

        await mail.sendMail({
            from: 'rkelectronics02@yahoo.com',
            to: 'rkelectronics02@yahoo.com',
            subject: 'E-Learning Support',
            html: `<p>${content}</p>`
        });

        res.status(200).send('Email Sent Successfully!')
    } catch (error) {
        res.status(400).send({error: error.message});
    }
}

const forgotPassword = async (req, res) => {
    try {
        const { body } = req;

        if(_.isEmpty(body.email) || _.isEmpty(body.password)) {
            throw new Error('Email or Password required!')
        }

        const teacher = await Teacher.findOne({email: body.email})
        if(!teacher) {
            return res.status(404).send({error: 'Teacher Not Found!'})
        }

        const password = await bcrypt.hash(body.password, 8);
        await Teacher.updateOne({ email: body.email }, { password });
        const updatedTeacher = await Teacher.findOne({email: body.email});
        res.status(200).send(updatedTeacher)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const sendQuery = async (req, res) => {
    try {
        const { body } = req;

        if(_.isEmpty(body.email) || _.isEmpty(body.message)) {
            throw new Error('Email or Password required!')
        }

        const createdQuery = new QueryModel({...req.body})
        // console.log(teacher)

        await createdQuery.save()
        res.status(200).send(createdQuery)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const getAllQueries = async(req, res) => {
    try {
        const queries = await QueryModel.find({})
        res.status(200).send(queries)
    } catch(error) {
        res.status(400).send({error: error})
    }
}

module.exports = {
    registerTeacher,
    getTeacher,
    loginTeacher,
    getAllTeachers,
    getTeacherById,
    getStudents,
    addBook,
    getBooks,
    addMaterial,
    removeStudent,
    sendEmail,
    forgotPassword,
    sendQuery,
    getAllQueries,
}