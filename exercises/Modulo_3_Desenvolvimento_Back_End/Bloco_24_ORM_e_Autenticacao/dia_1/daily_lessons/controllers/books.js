
const { Books } = require('../models');

const getAll = async (req, res, next) => {
	try {
		const books = await Books.findAll();
		res.status(200).json(books);
	} catch (e) {
		next(e);
	}
};

const getById = async (req, res, next) => {
	try {
		const { id } = req.params;
		const book = await Books.findByPk(id);
		if (!user) return res.status(404).json( { message: 'Livro não encontrado :(' });
		return res.status(200).json(book);
	} catch (e) {
		next(e)
	}
};

const create = async (req, res, next) => {
	try {
		const { title, author, pageQuantity } = req.body;
		console.log(req.body)
		const newBook = await Books.create({
			title,
			author,
			pageQuantity
		});
		console.log(books)
		res.status(201).json(newBook)
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getAll,
	getById,
	create,
};