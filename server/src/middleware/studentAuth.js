const jwt = require('jsonwebtoken')
const Student = require('../models/student')

 /*const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        console.log(req.headers.authorization)
        const iscustomAuth = token.length < 500

        let decodedData;
        if(token && iscustomAuth){
            decodedData = jwt.verify(token, 'thisisdemoapi')
            console.log(decodedData)
            req.user = decodedData
        }
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
} */

 const auth = async (req, res, next) => {
    try {
        // const token = req.headers('Authorization').replace('Bearer ', '')
        const token = req.header('authorization')
        console.log(token)
        // const token = req.header('x-auth-token')
        if(!token) {
            throw new Error('Authenticate first!')
        }
        const decoded = jwt.verify(token, 'thisisdemoapi')
        // console.log(decoded)
        const student = await Student.findOne({ _id: decoded.student.id, 'tokens.token': token })
        // console.log(student)

        if (!student) {
            throw new Error('student not found!')
        }

        req.token = token
        req.student = student
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}
 
module.exports = auth