const ProductController = require("../controllers/products.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createProducts);
};