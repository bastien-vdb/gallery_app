const express = require('express');
const { Schema, model } = require('mongoose');
require('dotenv').config();
const app = express();
const mongoose = require('./db-config');
const model1 = require('../Backend/modeles/model1');

app.use(express.json())

/**Middleware */
app.get('/api/', (req,res,next)=>{
    model1.find({})
    .then(success=>{
        console.log('A request has been done');
        res.status(200).json(success);
    })
    .catch(err=>{
        console.log(err.message);
        res.status(400).json(err.message)
    })
})

app.get('/api/:id', (req,res,next)=>{
    model1.findOne({_id:req.params.id})
    .then(success=>{
        console.log('A request has been done');
        res.status(200).json(success);
    })
    .catch(err=>{
        console.log(err.message);
        res.status(400).json(err.message)
    })
})

app.post('/api/', (req,res,next)=>{
    const pictureAdded = new model1({...req.body});
    console.log(pictureAdded);
    
    pictureAdded.save()
    .then(success=>{
        console.log('Object added to the DB')
        res.status(200).json('Obect created in the DB');
    })
    .catch(err=>{
        console.log(err.message)
        res.status(200).json(err.message);
    })
    
})

app.put('/api/:id', async (req,res,next)=>{
    const doc = await model1.findOne({_id:req.params.id})
    console.log(doc)
    doc.name = req.body.name;
    await doc.save()
    .then(success=>{
        console.log('An update has been done');
        res.status(200).json(success);
    })
    .catch(err=>{
        console.log(err.message);
        res.status(400).json(err.message)
    })
})

app.delete('/api/:id', async (req,res,next)=>{
    const doc = await model1.deleteOne({_id:req.params.id})
    .then(success=>{
        console.log('An update has been done');
        res.status(200).json(success);
    })
    .catch(err=>{
        console.log(err.message);
        res.status(400).json(err.message)
    })
})

app.listen(process.env.PORT,()=>{console.log(`Listen to port ${process.env.PORT}`)})