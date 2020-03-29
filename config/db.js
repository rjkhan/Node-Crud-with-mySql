const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'Rabnawazs-MacBook-Pro.local',
    user: 'root',
    password: 'root',
    database: 'nodejs'
});


// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});


module.exports = db;