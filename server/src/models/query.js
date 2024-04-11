const mongoose = require('mongoose')

const querySchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    message:{
        type: String,
        required: true,
        trim: true
    },
},{
    timestamps: true
})


querySchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()
    // delete userObject.tokens

    return userObject
}


const QueryModel = mongoose.model('Query', querySchema)

module.exports = QueryModel

