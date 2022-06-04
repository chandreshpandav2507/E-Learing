const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({    
    name: {
        type: String,
        // required: true,
        trim: true
    },
    subject:{
        type: String,
        // required: true,
        trim: true
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


materialSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    // delete userObject.tokens

    return userObject
}

/* materialSchema.methods.generateAuthToken = async function() {
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

materialSchema.statics.findByCredentials = async (email, password) => {
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


const Material = mongoose.model('Material', materialSchema)

module.exports = Material


