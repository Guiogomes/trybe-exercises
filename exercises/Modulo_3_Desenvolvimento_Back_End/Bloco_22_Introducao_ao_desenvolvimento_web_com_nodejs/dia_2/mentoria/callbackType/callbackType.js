const fs = require('fs');

fs.readFile('./arquivo1.txt', (err, fileContent1) => {
	if(err) {
		console.log(err.message);
		return;
	}
	fs.writeFile('arquivoJunto.txt', fileContent1.toString('utf8'));
	fs.readFile('./arquivo2.txt', (err, fileContent2) => {
		if(err) {
			console.log(err.message);
			return;
		}
		fs.writeFile('arquivoJunto.txt', fileContent2.toString('utf8'));
		fs.readFile('./arquivo3.txt', (err, fileContent3) => {
			if(err) {
				console.log(err.message);
				return;
			}
			fs.writeFile('arquivoJunto.txt', fileContent3.toString('utf8'));
		});
	});
});