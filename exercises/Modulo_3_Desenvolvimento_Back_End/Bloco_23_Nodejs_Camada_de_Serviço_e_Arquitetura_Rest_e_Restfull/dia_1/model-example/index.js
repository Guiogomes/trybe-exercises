// index.js

const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Books = require('./models/Books');
const Users = require('./models/Users');


const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/authors', async (_req, res) => {
	const authors = await Author.getAll();

	res.status(200).json(authors);
});

app.get('/books', async(req, res) => {
	 const books = await Books.getAllBooks();
	 res.status(200).json(books);
})

app.get('/books/:id', async(req, res) => {
	const { id } = req.params;
	const booksFilter = await Books.getAllByAuthorId(id)
	if(!booksFilter) return res.status(404).json({ message: 'Book author not found :(' });
	res.status(200).json(booksFilter);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
	const { first_name, middle_name, last_name } = req.body;

	if (!Author.isValid(first_name, middle_name, last_name)) {
			return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Author.create(first_name, middle_name, last_name);

	res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', async(req, res) => {
	const { title, author_id } = req.body;
	const validate = await Books.isValidBook(title, author_id);

	if (!validate) {
		return res.status(400).json({ message: 'Dados inválidos' });
	}

	await Books.createBook(title, author_id);

	res.status(201).json({ message: 'livro cadastrado com sucesso! :D' });

});

app.get('/users', async(req, res) => {
	const users = await Users.getAllUsers();
	if (!users || users.length === 0) return res.status(200).json([])
	res.status(200).json(users);
})

app.post('/users', async(req, res) => {
	const { name, last_name, password, email } = req.body;
	if (!Users.validateUser(name, last_name, password, email)) {
		return res.status(400).json({
			error: true,
			message: 'os campos são obrigatórios'
		});
	}

	if (password.length < 6) {
		return res.status(400).json({
			error: true,
			message: 'o campo "password" deve ter, no mínimo, 6 caracteres'
		});
	}

	await Users.createUser(name, last_name, password, email);
	res.status(200).json({
		name,
		last_name,
		password,
		email,
	})
});

app.get('/users/:id', async(req, res) => {
	const { id } = req.params;
	const user = await Users.getUserById(id);
	if (user.length === 0) return res.status(404).json({
		"error": true,
		"message": "Usuário não encontrado"
	});
	res.status(200).json(user);
})

app.put('/users/:id', async(req, res) => {
	const { id } = req.params;
	const { firstName, lastName, email, password } = req.body;
	if (!Users.validateUser(firstName, lastName, password, email)) {
		return res.status(400).json({
			error: true,
			message: 'os campos são obrigatórios'
		});
	}

	if (password.length < 6) {
		return res.status(400).json({
			error: true,
			message: 'o campo "password" deve ter, no mínimo, 6 caracteres'
		});
	}
	const user = await Users.getUserById(id);

	if (user.length === 0) return res.status(404).json({
		"error": true,
		"message": "Usuário não encontrado"
	});

	await Users.updateUser(Number(id), firstName, lastName, password, email);
	res.status(200).json({
		id: Number(id),
		firstName,
		lastName,
		email,
	})
});

app.listen(PORT, () => {
		console.log(`Ouvindo a porta ${PORT}`);
});