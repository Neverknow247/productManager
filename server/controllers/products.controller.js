const Product = require("../models/products.models");
const productsRoutes = require("../routes/products.routes");

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.status(200).json({message:"Somthing went wrong!", error: err}));
};
module.exports.createProducts = (req,res) => {
    let {title, price, description} = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product=>res.json(product))
        .catch(err=>res.json({message:"Somthing went wrong!", error: err}))
};