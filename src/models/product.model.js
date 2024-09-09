class Product {
    constructor(id,name,price,description){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    static validateProductData(name,price){
        if(!name || typeof name !== 'string') {
            throw new Error("Invalid or missing product name");
        }
        if(!price || typeof price !== 'number'){
            throw new Error("Invalid or missing product price");
        }
    }
}

module.exports = Product;