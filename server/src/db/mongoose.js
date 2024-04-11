const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbpandav7:SHM8YSIoVtah4mSd@e-learning.0min97p.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
/*mongoose.connect('mongodb://0.0.0.0:27017/', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(r => console.log(r)).catch(e => console.log(e));*/


// SHM8YSIoVtah4mSd