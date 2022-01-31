// hello-msc/index.js

const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const errorMiddleware = require('./middlewares/error');
const Author = require('./controllers/Author');

const app = express();

app.use(bodyParser.json());

// app.get('/authors', async (_req, res) => {
//   const authors = await Author.getAll();

//   res.status(200).json(authors);
// });

// app.get('/authors/:id', async (req, res) => {
//   const { id } = req.params;

//   const author = await Author.findById(id);

//   if (!author) return res.status(404).json({ message: 'Not found' });

//   res.status(200).json(author);
// });

// app.post('/authors', async (req, res) => {
//   const { first_name, middle_name, last_name } = req.body;

//   const author = await Author.createAuthor(first_name, middle_name, last_name);

//   if (!author) return res.status(400).json({ message: 'Dados inválidos' });

//   res.status(201).json(author);
// });

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.createAuthor));

app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});