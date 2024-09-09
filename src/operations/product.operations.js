const Product = require("../models/product.model")

let products = [];

const addProducts = (name,price,descriptions) => {
    try {
        Product.validateProductData(name,price);
        const product = new Product(products.length + 1, name, price, descriptions);
        products.push(product);
        return product;
    } catch (error) {
        throw new Error("Failed to add product ", error);
    }
}

const getAllProducts = () => {
    try {
        return products;
    } catch (error) {
        throw new Error("Failed to fetch all the products",error);
    }
}

const getProductById = (id) => {
    try {
        const product = products.find(prod => prod.id===id);
        if(!product){
            throw new Error("Product not found");
        }
        return product;
    } catch (error) {
        throw new Error("Failed to fetch the product", error);
    }
}

const updateProduct = (id,name,price,description) => {
    try {
        const product = getProductById(id);
        Product.validateProductData(name,price);
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        return product;
    } catch (error) {
        throw new Error("Failed to update the product", error);
    }
}

const deleteProduct = (id) => {
    try {
        const product = getProductById(id);
        products = products.filter(prod => prod.id!==id);
        return product;
    } catch (error) {
        throw new Error("Failed to delete the product", error);
    }
}

module.exports = {
    addProducts,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
}