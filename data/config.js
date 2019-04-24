const mysql = require('mysql');

//Objeto Credenciales
const config = {
    host: 'localhost',
    user: 'foo',
    password: 'bar',
    database: 'db1'
}

//Pool para tener multiples conexiones
const pool = mysql.createPool(config);

//Exports
module.exports = pool;