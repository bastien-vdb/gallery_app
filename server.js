const express = require('express');
require('dotenv').config();
const app = express();

/**Middleware */
app.get('/api/', (req,res,next)=>{
    res.json('Working on');
})

app.post('/api/', (req,res,next)=>{
    const corpus = req.body.mavalue;
    console.log(corpus)
    res.json(corpus);
})

app.listen(process.env.PORT,()=>{console.log(`Listen to port ${process.env.PORT}`)})