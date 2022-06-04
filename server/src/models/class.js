const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({    
    name: {
        type: String,
        // required: true,
        trim: true
    },
    url:{
        type: String,
        // required: true,
        trim: true
    },
    subject: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    time: {
        type: String,
        required: true
    }
},{
    timestamps: true
})


classSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    // delete userObject.tokens

    return userObject
}

/* classSchema.methods.generateAuthToken = async function() {
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

classSchema.statics.findByCredentials = async (email, password) => {
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


const Class = mongoose.model('Class', classSchema)

module.exports = Class

