const controller = require('./controller')
const path = require('path');

module.exports = function(app){
    app.get('/api/products', controller.allProducts)
    app.post('/api/products', controller.createProduct)
    app.get('/api/products/:id', controller.showOneProduct)
    app.put('/api/products/:id', controller.editProduct)
    app.delete('/api/products/:id', controller.deleteProduct)
    app.all("*", (req,res,next)=>{
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
