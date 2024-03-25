const mysql = require('mysql2/promise');

// Création de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lou2133*',
    database: 'api'
});

