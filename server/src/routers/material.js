const express = require('express');
const auth = require('../middleware/teacherAuth')
const material = require('../controllers/material')
const { check } = require('express-validator')


const router = express.Router()
router.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
     });
    

// POST -> New Material
router.post('/materials/new', [
    check('name', 'Name is required!').not().isEmpty(),
    check('subject', 'Subject is required!').not().isEmpty(),
    check('document', 'Please Select Document!').not()
],auth, material.addMaterial)

//GET -> Get material perticular teacher
router.get('/materials', auth, material.getMaterials)

//GET DOCUMENT BY ID
router.get('/materials/:id', material.getDocument)

//Update Material
router.post('/materials/:id', auth, material.updateMaterial)

//Delete Material
router.delete('/materials/:id', auth, material.deleteMaterial)

module.exports = router