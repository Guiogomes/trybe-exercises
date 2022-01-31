// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'gui',
  password: '&Squeciasenha18',
  database: process.env.MYSQL_DB_NAME
});

module.exports = connection;