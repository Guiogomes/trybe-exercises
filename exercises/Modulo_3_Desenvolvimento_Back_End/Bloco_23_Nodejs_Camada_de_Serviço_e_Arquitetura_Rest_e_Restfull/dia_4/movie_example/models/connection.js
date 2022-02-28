const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'gui',
  password: '&Squeciasenha18',
  database: 'model_example'
});

module.exports = connection;