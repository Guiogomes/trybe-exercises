const connection = require('./connection');

const getAllBooks = async () => {
		const [books] = await connection.execute(
				'SELECT id, title, author_id FROM model_example.books;',
		);
		return books;
};

const getAllByAuthorId = async (id) => {
	const [books] = await connection.execute(
		'SELECT id, title, author_id FROM model_example.books WHERE author_id=?',
		[id]
	);
	if (books.length === 0) return null;
	return books.filter((book) => book.author_id === parseInt(id));
}

const isValidBook = async (title, authorID) => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);

	if (!title || typeof title !== 'string') return false;
	if (!authorID || authors.find((author) => author.id === authorID)) return false;

	return true;
};

const createBook = async (title, authorID) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, authorID],
);

module.exports = {
	getAllBooks,
	getAllByAuthorId,
	isValidBook,
	createBook,
};