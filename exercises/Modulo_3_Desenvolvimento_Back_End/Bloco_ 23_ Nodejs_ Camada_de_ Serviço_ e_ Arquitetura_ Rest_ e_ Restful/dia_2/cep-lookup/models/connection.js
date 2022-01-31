const mysql = require('mysql2/promise');

const connection = msql.createPool({
	host: 'localhoost',
	user: 'gui',
	password: '&Squeciasenha18',
	database: 'cep-lookup'
});

module.exports = connection;