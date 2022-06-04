const express = require('express')
var cors = require('cors');
const ngrok = require('ngrok');
require('./db/mongoose');

const fileUpload = require('express-fileupload');

const studentRouter = require('./routers/student')
const teacherRouter = require('./routers/teacher')
const bookRouter = require('./routers/books')
const materialRouter = require('./routers/material')
const classRouter = require('./routers/class')
const paymentRouter = require('./routers/payment')


const app = express()
const port = process.env.PORT || 4000

const user = 'pandavdharmik123@gmail.com'
const password = 'Dharmik@106'

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.json())
app.use(cors(corsOptions));
app.use(fileUpload());

app.use(studentRouter)
app.use(teacherRouter)
app.use(bookRouter)
app.use(materialRouter)
app.use(classRouter)
app.use(paymentRouter)



app.get('/hello', (req, res) => {
    res.send("Hello world!!!")
})

app.listen(port, () => {
    console.log('Server running on ' + port)
})
