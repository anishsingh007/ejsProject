const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ejsproject',
    password: '180828'
});

module.exports = pool.promise();