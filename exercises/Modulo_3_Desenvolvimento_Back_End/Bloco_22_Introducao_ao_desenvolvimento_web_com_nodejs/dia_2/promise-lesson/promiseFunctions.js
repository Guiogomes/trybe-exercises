const fs = require('fs');

readFilePromise = (fileName) => {
	return new Promise((resolve, reject) => {
		fs.readFile(fileName, (err, content) => {
			if (err) return reject(err);
			resolve(content);
		});
	});
};

readFilePromise('./file.txt')
	.then((content) => {
		console.log(`Lido arquivo com ${content.byteLength} bytes`);
		return readFilePromise('./file2.txt');
	})
	.then((secondContent) => {
		console.log(`Lido arquivo com ${secondContent.byteLength} bytes`);
		return readFilePromise('./file3.txt');
	})
	.then((thirtyContent) => {
		console.log(`Lido arquivo com ${thirtyContent.byteLength} bytes`);
	})
	.catch((err) => console.log(`Erro ao ler o arquivo: ${err.message}`))

