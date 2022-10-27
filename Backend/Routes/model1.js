const router = require("express").Router();
const modelCtr = require('../controllers/model1');
const multer = require('../multer-config');

router.get('/', modelCtr.getAllModel1);

router.get('/:id', modelCtr.getOneModel1);

router.post('/', multer, modelCtr.createOneModel1);

router.put('/:id', modelCtr.modifyOneModel1);

router.delete('/:id', modelCtr.deleteOneModel1);

module.exports = router;