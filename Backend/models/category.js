// const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema =new Schema({
    title:{
        type: String,
        required:true
    },
    body:{
        type: String,
        required:true
    },
    button:{
        type: String,
        required:true
    },
},{timestamps:true});

const Category =  mongoose.model('Category',categorySchema)
module.exports = Category;