import mysql from 'mysql2';

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Estrogengummybears123@',
    database: process.env.DB_DATABASE || 'sharkdb'
})
    .promise();

export default db;