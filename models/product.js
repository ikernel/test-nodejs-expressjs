const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    name: String,
    price: Number,
    image_url: String,
    description: String,
    creation_date: Date
})

module.exports = mongoose.model('Product', Product)