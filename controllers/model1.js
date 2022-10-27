const model1 = require('../modeles/model1');


const getAllModel1 = (req, res, next) => {
    model1.find({})
        .then(success => {
            console.log('A request has been done');
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
            console.log('A request has been done');
            res.status(200).json(success);
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).json(err.message)
        })
}

const createOneModel1 = (req, res, next) => {
    const pictureAdded = new model1({ ...req.body });
    console.log(pictureAdded);

    pictureAdded.save()
        .then(success => {
            console.log('Object added to the DB')
            res.status(200).json('Obect created in the DB');
        })
        .catch(err => {
            console.log(err.message)
            res.status(200).json(err.message);
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
    const doc = await model1.deleteOne({ _id: req.params.id })
        .then(success => {
            console.log('An update has been done');
            res.status(200).json(success);
        })
        .catch(err => {
            console.log(err.message);
            res.status(400).json(err.message)
        })
}

exports.getAllModel1 = getAllModel1;
exports.getOneModel1 = getOneModel1;
exports.createOneModel1 = createOneModel1;
exports.modifyOneModel1 = modifyOneModel1;
exports.deleteOneModel1 = deleteOneModel1;