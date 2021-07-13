// apiScript.js
const getUrl = 'https://icanhazdadjoke.com/'
const fetch = require('node-fetch');
fetch(getUrl)
	.then(url => console.log(url.json()))
	.catch(error => `foi mal, não deu pra mostrar ${error}`)
	// .then(({ message }) => console.log(message))
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   // Adicionar lógica aqui!
// };

// window.onload = () => fetchJoke();