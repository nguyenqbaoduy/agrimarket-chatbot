import mysql from 'mysql2/promise';

const prompt = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Baoduy321@',
    database: 'agrimarket'
});

console.log('Connected to MySQL database!');

