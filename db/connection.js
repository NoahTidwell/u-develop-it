const mysql = require('mysql2');

// Connection to MySQL Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username
        user: 'root',
        // MySQL Password
        password: 'password',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;