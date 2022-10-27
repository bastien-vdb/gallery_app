const mongoose = require('mongoose');
const { model, Schema } = require("mongoose");

const model1 = mongoose.model('model1', new Schema({
    name: {type: String, required:true},
    url: {type: String, required:true}
}))

module.exports = model1;