const ProductModel = require('../models/productModel');

const getAll = async () => {
	const products = await ProductModel.getAll();
	return products;
}

const getById = async (id) => {
	if (!id) return {
		error: 404,
		message: 'parametro não fornecido corretamente, por favor, tente de novo.'
	};

	// if (typeof id !== 'number') return {
	// 	error: 404,
	// 	message: 'id precisa ser um número'
	// }
	const products = await ProductModel.getAll();
	const productId = products.find((product) => product.id === Number(id))
	if (productId.length === 0) return {
		error: 400,
		message: 'Produto não encontrado'
	}
	return productId;
}

const update = (name, brand, id) => {

}

module.exports = {
	getById,
	getAll,
	update
}