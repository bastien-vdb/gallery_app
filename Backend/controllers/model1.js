const model1 = require('../modeles/model1');
const fs = require('fs');


const getAllModel1 = (req, res, next) => {
    model1.find({})
        .then(success => {
            res.status(200).json(success);
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).json(err.message)
        })
}

const getOneModel1 = (req, res, next) => {
    model1.findOne({ _id: req.params.id })
        .then(success => {
            res.status(200).json(success);
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).json(err.message)
        })
}

const createOneModel1 = (req, res, next) => {
    const pictureUp = new model1({
        name:req.body.name,
        url:`${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`
    })
    pictureUp.save()
    .then(success=>{
        console.log(success);
        res.status(201).json({message:'Object created', message:success});
    })
    .catch(err=>{
        console.log(err.message);
        res.status(400).json({error:err.message});
    })
}

const modifyOneModel1 = async (req, res, next) => {
    const doc = await model1.findOne({ _id: req.params.id })
    console.log(doc)
    doc.name = req.body.name;
    await doc.save()
        .then(success => {
            console.log('An update has been done');
            res.status(200).json(success);
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).json(err.message)
        })
}

const deleteOneModel1 = async (req, res, next) => {
    const doc = await model1.findOne({ _id: req.params.id });
    const filename = doc.url.split('/uploads/')[1];
    console.log(filename);
    fs.unlink(`uploads/${filename}`, () => {
        doc.deleteOne({ _id: req.params.id })
        .then(success=>res.status(200).json('Object deleted'))
        .catch(err=>res.status(401).json(err.message));
    })
}

exports.getAllModel1 = getAllModel1;
exports.getOneModel1 = getOneModel1;
exports.createOneModel1 = createOneModel1;
exports.modifyOneModel1 = modifyOneModel1;
exports.deleteOneModel1 = deleteOneModel1;