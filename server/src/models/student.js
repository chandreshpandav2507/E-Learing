const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const studentSchema = new mongoose.Schema({
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
        trim: true
        /* minlength: 10,
        maxlength: 10 */
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
        trim: true
        // minlength: 7,
        /* validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain password!')
            }
        } */
    },
    confirmPassword: {
        type: String,
        trim: true
        // minlength: 7,
        /* validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password should not contain password!')
            }
        } */
    },
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }],
    tokens: [{
        token:{
            type:String,
            required: true
        }
    }]
})


studentSchema.methods.toJSON = function () {
    const teacher = this
    const teacherObject = teacher.toObject()

    delete teacherObject.password
    // delete teacherObject.tokens

    return teacherObject
}

 studentSchema.methods.generateAuthToken = async function() {
    const student = this        
    const payload = {
        student: {
            id: student.id.toString()
        }
    }
    // const token = jwt.sign({_id: student._id.toString()}, 'thisisdemoapi')
    const token = jwt.sign(payload, 'thisisdemoapi', {expiresIn: '3600s'})
    // console.log(token)
    student.tokens = student.tokens.concat({ token })
    await student.save()
    return token
} 

studentSchema.statics.findByCredentials = async (email, password) => {
    const student = await Student.findOne({email})
    if(!student) {
        throw new Error([msg = 'Invalid email adress!'])
    }   

    const isMatch = await bcrypt.compare(password, student.password)
    console.log(isMatch)
    if(!isMatch){
        throw new Error([msg ='Password is incorrect!'])
    }

    return student
} 

studentSchema.pre('save', async function(next) {
    const student = this
    if(student.isModified('password')){
        student.password = await bcrypt.hash(student.password, 8)
    }
    next()
})


const Student = mongoose.model('Student', studentSchema)

module.exports = Student


