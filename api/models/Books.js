
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BookSchema = new Schema({
    user: { type: String, required: true }, 
    name: { type: String, required: true }, 
    author: { type: String, required: true }, 
    descrip: { type: String, required: true }, 
    opinion: { type: String, required: true }, 
    dt: { type: Date, required: true }
});

const NewBookModel = model('NewBook', BookSchema);

module.exports = NewBookModel;
