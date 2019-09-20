const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/product_manager',{useNewUrlParser: true});

const ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "Please enter name of product"]},
    price: {type: Number, required: true},
    imgUrl: {type: String, required: [true, "Please submit an image."]}
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;

// Already set up all express files.
// Just need to set up Angular observables and after when ready.