const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const booksRouter = require('./booksRouter.js');

app.use('/books', booksRouter);

app.listen(3000, () => {
	console.log('Ouvindo na porta 3000');
});

