const ProductService = require('../services/productServices');

const getAllProducts = async (req, res, next) => {
  const products = await ProductService.getAll();

  res.status(200).json(products)
};

const getProductById = async (req, res, next) => {
	const { id } = req.params;
	const product = await ProductService.getById(id);

  res.status(200).json(product);
};

module.exports = {
	getAllProducts,
	getProductById,
}