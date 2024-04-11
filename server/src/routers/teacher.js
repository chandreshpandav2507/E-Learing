const express = require('express')
const router = express.Router()
const {check} = require('express-validator/check')

const teacher = require('../controllers/teacher')
const auth = require('../middleware/teacherAuth')
const { removeListener } = require('../models/books')

// teacher Registration.
router.post('/teacher/reg', [
    check('firstName', 'First name is required!').not().isEmpty(),
    check('lastName', 'Last Name is required!').not().isEmpty(),
    check('email', 'Please enter a valid email!').isEmail(),
    check('phone', 'Please enter valid mobile number!').isLength({min:10, max:10}),
    check('password', 'Please enter a password with 6 or more character').isLength({min: 6}),
    check('address', 'Please Enter an adress!').not().isEmpty(),
    check('subjects', 'Please Select at least one subject!').not().isEmpty(),
    check('languageKnown', 'Please Select at least one language!').not().isEmpty(),
    check('universityName', 'First name is required!').not().isEmpty(),
    check('degree', 'Please Enter your Degree!').not().isEmpty(),
    check('ratePerHour', 'Please enter Rate Per Hour!').not().isEmpty(),
], teacher.registerTeacher)

// teacher Login
router.post('/teacher/login',[
    check('email', 'Please enter a valid email!').isEmail(),
    check('password', 'Please enter a password with 6 or more character').isLength({min: 6})
],teacher.loginTeacher)


// Get Profile
router.get('/teacher/me', auth, teacher.getTeacher)

//GET all teachers
router.get('/teacher/all', teacher.getAllTeachers)

//GET perticulat teahcer by id
router.get('/teacher/:id', teacher.getTeacherById)

//GET connected Students
router.get('/teacher/me/students', auth, teacher.getStudents)

//Create book by teacher
router.post('/teacher/me/book/new', auth, teacher.addBook)

//GET book created by teacher
router.get('/teacher/me/books', auth, teacher.getBooks)

//Create material by Teahcer
router.post('/teacher/me/material/new', auth, teacher.addMaterial)

//Delete student from teacher side.
router.post('/teacher/me/students/:id', auth, teacher.removeStudent)

router.post('/send-email', teacher.sendEmail);

router.post('/teacher-forgot-password', teacher.forgotPassword);

router.post('/send-query', teacher.sendQuery);

router.get('/send-query/all', teacher.getAllQueries);
module.exports = router