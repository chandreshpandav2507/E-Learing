const Classes = require('../models/class')
const Teacher = require('../models/teacher')
const { validationResult } = require('express-validator')


const createClass = async(req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
         return res.status(400).send({errors: errors.array()})
        } 
        const classes = new Classes({
            ...req.body,
            createdBy: req.teacher._id
        })
        await classes.save()
        // console.log(req.teacher.classes)
        await req.teacher.classes.unshift(classes._id)
        // console.log(req.teacher.classes)
        await req.teacher.save()
        res.status(201).send(classes)
    } catch(error) {
        res.status(400).send({errror: error.message})
    } 
}

const getClasses = async(req, res) => {
    try {
        const classes = await Classes.find({createdBy: req.teacher._id})
        res.status(200).send(classes)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const updateClass = async (req, res) => {
    try {
        const updatedClass = await Classes.findOneAndUpdate({_id: req.params.id, createdBy: req.teacher._id}, {
            ...req.body,
            name: req.body.name,
            subject: req.body.subject,
            url: req.body.url,
            time: req.body.time
        })
        res.status(200).send(updatedClass)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const deleteClass = async(req, res) => {
    try {
        const classes = await Classes.findOneAndDelete({_id: req.params.id, createdBy: req.teacher._id})

        if(!classes) {
            res.status(404).send({error: 'Class not found!'})
        }

        await Teacher.updateOne({_id: req.teacher._id}, {$pull: {'classes': req.params.id}})

        res.status(202).send(classes)

    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = {
   createClass,
   getClasses,
   updateClass,
   deleteClass
}