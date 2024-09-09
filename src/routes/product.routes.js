const express = require('express');
const { createProduct, findAllProducts, findProductById, editProductById, removeProductById } = require('../controllers/product.controller');
const router = express.Router();

router.post('/products',createProduct);
router.get('/products',findAllProducts);
router.get('/products/:id',findProductById);
router.put('/products/:id',editProductById);
router.delete('/products/:id',removeProductById);

module.exports = router;