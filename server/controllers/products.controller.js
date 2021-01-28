const Product = require("../models/products.models");
const productsRoutes = require("../routes/products.routes");

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts}))
        .catch(err => res.status(200).json({message:"Somthing went wrong!", error: err}));
};
module.exports.findOneProduct = (req,res) => {
    Product.find({_id: req.params.id})
        .then(oneProduct => res.json({ product: oneProduct}))
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
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updateProduct => res.json({product: updateProduct}))
        .catch(err=>res.json({message:"Somthing went wrong", error: err}));
};
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json({product: deleteConfirmation}))
        .catch(err=>res.json({message:"Something went wrong", error: err}));
};