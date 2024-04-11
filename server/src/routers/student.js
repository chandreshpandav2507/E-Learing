const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

const student = require('../controllers/student')
const auth = require('../middleware/studentAuth')

// Student Registration.
router.post('/student/reg',[
    check('firstName', 'Name is required!').not().isEmpty(),
    check('lastName', 'Name is required!').not().isEmpty(),
    check('email', 'Please enter a valid email!').isEmail(),
    check('phone', 'Please enter valid mobile number!').isLength({min:10, max:10}),
    check('password', 'Please enter a password with 6 or more character').isLength({min: 6})
    // check('confirmPassword', 'Please enter a Confirm Password with 6 or more character').isLength({min: 6})
] ,student.registerStudent)

// Student Login
router.post('/student/login', [
    check('email', 'Please enter a valid email!').isEmail(),
    check('password', 'Please enter a password with 6 or more character').isLength({min: 6})
] ,student.loginStudent)

// Get Profile
router.get('/student/me', auth, student.getStudent)

//Update Profile
router.post('/student/me/update', auth, student.updateStudent)

//Delete Profile.
router.delete('/student/me', auth, async (req, res) => {
    try{
        await req.student.remove()
        // res.send(user)
        res.send(req.student)
    } catch(e){
        res.status(400).send(e)
    }
})

router.get('/student/all', student.getAllStudents)
//Add teacher

router.get('/student/:id', auth, student.addTeacherById)
//Get teacher of student hired...

router.get('/student/me/teachers', auth, student.getTeachers)

//Get all the books of connected teachers
router.get('/student/me/books', auth, student.getBooks)

//Get all the materials of connected teachers
router.get('/student/me/materials', auth, student.getMaterials)

//All classes of connected teachers
router.get('/student/me/classses', auth, student.getClasses)

//Dissmiss Teacher by Student
router.delete('/student/me/teachers/:id', auth, student.dissmissTeachers)

router.post('/student-forgot-password', student.forgotPassword);

module.exports = router