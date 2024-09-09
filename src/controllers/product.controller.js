const { addProducts, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../operations/product.operations");

const createProduct = (req,res) => {
    try {
        const {name, price, description } = req.body;
        if(!name || !price){
            return res.status(400).send({status: false, message: "Name and price are required"});
        }
        const product = addProducts(name,price,description);
        res.status(201).send({status: true, message: "Product added successfully", data: product});
    } catch (error) {
        res.status(400).send({status: false, message: error.message});
    }
}

const findAllProducts = (req,res) => {
    try {
        const products = getAllProducts();
        res.status(200).send({status: true, message: "Products fetched successfully", data: products});
    } catch (error) {
        res.status(400).send({status: false, message: error.message});
    }
}

const findProductById = (req,res) => {
    try {
        const productId = parseInt(req.params.id);
        const product = getProductById(productId);
        res.status(200).send({status: true, message: "Product fetched successfully", data: product});
    } catch (error) {
        res.status(400).send({status: false, message: error.message});
    }
}

const editProductById = (req,res) => {
    try {
        const productId = parseInt(req.params.id);
        const {name, price, description } = req.body;
        const updatedProduct = updateProduct(productId, name, price, description);
        res.status(200).send({status: true, message: "Product updated successfully", data: updatedProduct});
    } catch (error) {
        res.status(400).send({status: false, message: error.message});
    }
}

const removeProductById = (req,res) => {
    try {
        const productId = parseInt(req.params.id);
        const deletedProduct = deleteProduct(productId);
        res.status(200).send({status: true, message: "Product removed successfully", data: deletedProduct});
    } catch (error) {
        res.status(400).send({status: false, message: error.message});
    }
}
module.exports = {
    createProduct,
    findAllProducts,
    findProductById,
    editProductById,
    removeProductById,
}