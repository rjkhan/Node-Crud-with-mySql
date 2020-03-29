const mysql = require('mysql');

var db = mysql.createConnection ({
    host: 'your host',
    user: 'root',
    password: 'root',
    database: 'databaseName'
});


// connect to database
 db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


module.exports = db;