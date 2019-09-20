const Product = require('./models');

module.exports = {
    allProducts: (req, res)=>{
        Product.find()
            .then(data=>res.json({productsData: data, message: 'success'}))
            .catch(data=>res.json({productsData: err, message: 'failure'}))
    },
    createProduct: (req, res)=>{
        Product.create(req.body)
            .then(data=>res.json({productsData: data, message: 'success'}))
            .catch(data=>res.json({productsData: err, message: 'failure'}))
    },
    showOneProduct: (req, res)=>{
        Product.findById(req.params.id)
            .then(data=>res.json({productsData: data, message: 'success'}))
            .catch(data=>res.json({productsData: err, message: 'failure'}))
    },
    editProduct: (req, res)=>{
        Product.update({_id: req.params.id}, req.body, {runValidators: true})
            .then(data=>res.json({productsData: data, message: 'success'}))
            .catch(data=>res.json({productsData: err, message: 'failure'}))
    },
    deleteProduct: (req, res)=>{
        Product.findByIdAndRemove(req.params.id)
            .then(data=>res.json({productsData: data, message: 'success'}))
            .catch(data=>res.json({productsData: data, message: 'failure'}))
    }
}