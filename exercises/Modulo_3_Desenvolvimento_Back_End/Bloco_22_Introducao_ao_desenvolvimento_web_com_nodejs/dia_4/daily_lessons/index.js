const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const app = express();
const nomeDoArquivo = './simpsons.json';
const simpsonsCharacters = fs.readFile(nomeDoArquivo, 'utf8');
const dealingWithArquive = (item) => {
	return (req, res) => {
		const { id } = req.params;
		if(id) {
			return item.then((resp) => {
				const itemIndex = JSON.parse(resp).find(item => item.id === id)
				return res.status(200).json(itemIndex)
			});	
		}
		item.then((resp) => res.json(JSON.parse(resp)))
	}
}

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
	res.status(200).json({message: 'pong'});
});

app.listen(3002, () => {
	console.log('Listen localhoost 3002 :D');
});

app.post('/hello', (req, res) => {
	const { name } = req.body;
	res.push(name);
	res.status(201).json({ message: `Hello ${name}, tudo bem?`});
});

app.post('/greetings', (req, res) => {
	const { name, age } = req.body;
	age >= 17
	? res.status(200).json({ message: `Hello, ${name}!`})
	: res.status(401).json({ message: 'Unauthorized'});
})

app.put('/users/:name/:age', (req, res) => {
	const { name, age } = req.body;
	// const { name, age } = req.params; Esse modelo funciona
	// também, mas eu precisaria já dar o nome e idade no url, o que tornaria menos dinâmico
	// já que eu precisaria saber o nome e idade da pessoa de antemão.
	res.status(200).json({ message: `Seu nome é ${name} e você tem ${age} de idade`});
});

app.get('/simpsons', dealingWithArquive(simpsonsCharacters));

// (req, res) => {	
// 	simpsonsCharacters.then(data => {
// 		res.json(JSON.parse(data))
// 	});
// })

app.get('/simpsons/:id', dealingWithArquive(simpsonsCharacters));

app.post('/simpsons', (req, res) => {
	const { id, name } = req.body;
	simpsonsCharacters.then((resp) => {
		if(JSON.parse(resp).find((item) => item.id === id) === true) {
			return res.status(409).json({message: 'id already exists'})
		}
		JSON.parse(resp).push({id, name});
		res.status(204).end();
	})
})
