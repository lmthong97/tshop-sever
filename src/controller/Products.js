const db = require('../models');
const Products = db.Products;

exports.getAllProducts = async (req, res) => {
    try {
        const productList = await Products.findAll();
        res.json(productList);
    } catch (error) {
        console.log(error);
    }
};

exports.getAllProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Products.findByPk(id);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
};

exports.addProduct = async (req, res) => {
    try {
        const product = req.body;
        await Products.create(product);
        res.json(product);
    } catch (error) {
        console.log(error);
    }
};

exports.delProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        await Products.destroy({
            where: {
                id: productId,
            },
        });
        res.json('Delete Product successfully!');
    } catch (error) {
        console.log(error);
    }
};
