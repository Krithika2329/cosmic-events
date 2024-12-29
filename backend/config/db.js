const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'katnisseverdeen',
    database: 'CosmicEventDB' 
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database!');
});

module.exports = db;