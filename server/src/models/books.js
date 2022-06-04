const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const bookSchema = new mongoose.Schema({    
    name: {
        type: String,
        // required: true,
        trim: true
    },
    description: {
        type: String,
        // required: true,
        trim: true
    },
    subject:{
        type: String,
        // required: true,
        trim: true
    },
    image: {
        type: Buffer
    },
    document: {
        type: Buffer
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    }
},{
    timestamps: true
})


bookSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    // delete userObject.tokens

    return userObject
}

/* bookSchema.methods.generateAuthToken = async function() {
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

bookSchema.statics.findByCredentials = async (email, password) => {
    const teacher = await Teacher.findOne({email})
    if(!teacher) {
        throw new Error([msg = 'Invalid email adress!'])
    }  

    const isMatch = await bcrypt.compare(password, teacher.password)
    if(!isMatch){
        throw new Error([msg ='Password is incorrect!'])
    }

    return teacher
}  */


const Book = mongoose.model('Book', bookSchema)

module.exports = Book


