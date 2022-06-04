const Book = require('../models/books')
const Teacher = require('../models/teacher')

const fs = require('fs')


const createBook = async(req, res) => {

    var bookImage = req.files.image;
    var bookDocument = req.files.document;

    /* var book = new Book({
        ...req.body,
        image: bookImage.data,
        document: bookDocument.data
    }) */
    // console.log(book)
    // fs.writeFileSync('some.pdf', bookDocument.data)
    console.log(bookDocument.data)
    // book.save()
    // res.send(book)
}

const getBooks = async(req,res) => {
    try {
        const books = await Book.find({})
        res.status(200).send(books)
    } catch(error){
        res.status(400).send({error: error.message})
    }
}

const getDocument = async(req,res) => {
    try {
        const book = await Book.findOne({_id: req.params.id})
        if(!book) {
            res.status(404).send({error: 'Book not found!'})
        }

        res.status(200).send(book.document)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const updateBook = async(req, res) => {
    try {
        const book = await Book.findOneAndUpdate({_id: req.params.id, createdBy: req.teacher._id}, {
            ...req.body,
            name: req.body.name,
            description: req.body.description,
            subject: req.body.subject,
            image: req.files.image.data,
            document: req.files.document.data,
        })

        res.status(200).send(book)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({_id: req.params.id, createdBy: req.teacher._id})
        await Teacher.updateOne({_id: req.teacher._id}, {$pull: {'books': req.params.id}})

        if(!book) {
            return res.status(404).send({error: 'Book Not Found!'})
        }

        res.status(200).send(book)
    } catch(error) {
        res.status(400).send({error: error.message})
    }
}
module.exports = {
    createBook,
    getBooks,
    getDocument,
    updateBook,
    deleteBook
}