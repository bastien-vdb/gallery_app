const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bvb:bvb@cluster0.lo8d5h2.mongodb.net/?retryWrites=true&w=majority')
.then(success=>console.log('Connected to the db'))
.catch(err=>console.log(err.message))

module.exports = mongoose;