const fs = require('fs').promises;
const meusArquivos = [fs.readFile('./arquivo1.txt'), fs.readFile('./arquivo2.txt'), fs.readFile('./arquivo3.txt')];

Promise.all(meusArquivos)
	.then(info => fs.writeFile('arquivoJunto.json', info.toString('utf8')))
	.catch(err => console.log(err.message));

// O lado bom:
// - mais rápido;
// - mais limpo e de fácil leitura;
// - menor a chance de efeito cascata;

// lado ruim:
// - 