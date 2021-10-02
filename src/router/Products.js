const express = require('express');
const router = express.Router();

const Products = require('../controller/Products');

// GET All Products
// route GET /products
router.get('/', Products.getAllProducts);

// GET Product by Id
// route GET /products/:id
router.get('/:id', Products.getAllProductById);

//POST Product
// route POST /products
router.post('/', Products.addProduct);

//DELETE Product
// route DELETE /productId
router.delete('/:productId', Products.delProduct);

module.exports = router;
