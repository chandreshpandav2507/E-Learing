const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const teacherSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    address:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        trim: true,
        lowercase: true
        /* validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid Email Address!')
            }
        } */
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
        /* validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain password!')
            }
        } */
    },
    ratePerHour:{
        type: String,
        default: 0
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    subjects: [{
        type: String,
        trim: true,
        required: true
    }],
    languageKnown: [{
        type: String,
        trim: true,
        required: true
    }],
    degree: {
        type: String,
        trim: true,
        required: true
    },
    universityName: {
        type: String,
        trim: true,
        required: true
    },
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    materials:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Material'
    }],
    classes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }],
    tokens: [{
        token:{
            type:String,
            required: true
        }
    }] 
})


teacherSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    // delete userObject.tokens

    return userObject
}

teacherSchema.methods.generateAuthToken = async function() {
    const teacher = this
    const payload = {
        teacher: {
            id: teacher.id.toString()
        }
    }
    const token = jwt.sign(payload, 'thisisdemoapi', {expiresIn: '3600s'})

    teacher.tokens = teacher.tokens.concat({ token })
    await teacher.save()
    return token
} 

teacherSchema.statics.findByCredentials = async (email, password) => {
    const teacher = await Teacher.findOne({email})
    if(!teacher) {
        throw new Error([msg = 'Invalid email adress!'])
    }  

    const isMatch = await bcrypt.compare(password, teacher.password)
    if(!isMatch){
        throw new Error([msg ='Password is incorrect!'])
    }

    return teacher
} 

teacherSchema.pre('save', async function(next) {
    const teacher = this
    if(teacher.isModified('password')){
        teacher.password = await bcrypt.hash(teacher.password, 8)
    }
    next()
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher


