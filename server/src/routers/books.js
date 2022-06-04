const express = require('express')
const router = express.Router()
const auth = require('../middleware/teacherAuth')

const books = require('../controllers/books')

//ADD New Book
router.post('/book/new', books.createBook)

router.get('/books', books.getBooks)

router.get('/books/:id', books.getDocument)

//UPDATE BOOK BY ID
router.post('/book/update/:id', auth, books.updateBook)

//DELETE book by id
router.delete('/books/delete/:id', auth, books.deleteBook)

module.exports = router