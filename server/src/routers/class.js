const express = require('express')
const { check } = require('express-validator')

const auth = require('../middleware/teacherAuth')

const router = express.Router()

const classes = require('../controllers/class')

//ADD class
router.post('/class/new',[
    check('name', 'Name is required!').not().isEmpty(),
    check('url', 'url is required!').not().isEmpty(),
    check('subject', 'Please enter Subject!').not().isEmpty(),
    check('time', 'Please enter valid Time!').not().isDate()
], auth, classes.createClass)

//GET Authorized Classes 
router.get('/class', auth, classes.getClasses)

//UPDATE Class
router.post('/class/:id', auth, classes.updateClass)

//Delete Class ny its id
router.delete('/class/:id', auth, classes.deleteClass)
module.exports = router