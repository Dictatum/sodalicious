const mysql = require('mysql2');
require('dotenv').config();

async function run() {
    const connectionString = process.env.DATABASE_URL;
    const pool = mysql.createPool({ uri: connectionString }).promise();

    try {
        const [rows] = await pool.query('SELECT * FROM products LIMIT 5');
        console.log("Products:");
        rows.forEach(p => {
            console.log(`ID: ${p.id}, Name: ${p.name}, Price: ${p.price} (Type: ${typeof p.price})`);
        });
    } catch (e) {
        console.error(e);
    } finally {
        pool.end();
    }
}

run();
