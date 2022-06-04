const Material = require('../models/material')
const Teacher = require('../models/teacher')
const { validationResult } = require('express-validator')

const addMaterial = async(req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
         return res.status(400).send({errors: errors.array()})
        } 
        const material = new Material({
            ...req.body,
            document: req.files.document.data,
            createdBy: req.teacher._id
        })
        await material.save()
        await req.teacher.materials.unshift(material._id)
        await req.teacher.save()
        res.send(material)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const getMaterials = async(req, res) => {
    try {
        const materials = await Material.find({createdBy: req.teacher._id})
        res.send(materials)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const getDocument = async(req,res) => {
    try {
        const material = await Material.findOne({_id: req.params.id})
        if(!material) {
            res.status(404).send({error: 'material not found!'})
        }

        res.status(200).send(material.document)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const updateMaterial = async(req, res) => {
    try {
        const updatedMaterial = await Material.updateOne({_id: req.params.id, createdBy: req.teacher._id}, {
            ...req.body,
            name: req.body.name,
            subject: req.body.subject,
            document: req.files.document.data
        })
        res.status(200).send(updatedMaterial)
    } catch(error){
        res.send({error: error.message})
    }
}

const deleteMaterial = async(req, res) => {
    try {
        const material = await Material.findOneAndDelete({_id: req.params.id, createdBy: req.teacher._id})
        await Teacher.updateOne({_id: req.teacher._id}, {$pull: {'materials': req.params._id}})

        if(!material) {
            return res.status(404).send({error: "Material not Found!"})
        }

        res.status(200).send(material)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = {
    addMaterial,
    getMaterials,
    getDocument,
    updateMaterial,
    deleteMaterial
}