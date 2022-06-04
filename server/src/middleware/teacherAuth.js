const jwt = require('jsonwebtoken')
const Teacher = require('../models/teacher')

 const auth = async (req, res, next) => {
    try {
        const token = req.header('authorization')
        console.log(token)
        if(!token) {
            throw new Error('Authenticate first!')
        }
        const decoded = jwt.verify(token, 'thisisdemoapi')
        console.log(decoded)
        const teacher = await Teacher.findOne({ _id: decoded.teacher.id, 'tokens.token': token })

        if (!teacher) {
            throw new Error('teacher not found!')
        }

        req.token = token
        req.teacher = teacher
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}
 
module.exports = auth