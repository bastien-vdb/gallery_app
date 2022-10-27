const multer = require('multer');

const mymeType = {
    'image/jpg':'jpg',
    'image/jpeg':'jpeg',
    'image/png':'png'
}

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads')
    },
    filename: (req,file,cb)=>{
        const uniqueSuffix= Date.now()+'_'+ Math.round(Math.random()*1E9);
        const fileExtension = mymeType[file.mimetype];
        cb(null, file.fieldname + '_' + uniqueSuffix + '.' + fileExtension);
    }
})

module.exports = multer({storage: storage}).single('image');