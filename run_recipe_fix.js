// Removed invalid TS import
const fs = require('fs');
const path = require('path');

// Mocking the sql wrapper because we are running in node independently?
// No, I can't easily import from '@/lib/db' in a standalone script if it uses ts-node or similar.
// I will use mysql2 directly to be safe and simple.

const mysql = require('mysql2');
require('dotenv').config();

async function run() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        console.error("DATABASE_URL not set");
        return;
    }

    console.log("Connecting to DB...");
    const pool = mysql.createPool({
        uri: connectionString,
        multipleStatements: true
    }).promise();

    try {
        const sqlPath = path.join(__dirname, 'fix_recipes.sql');
        const sqlContent = fs.readFileSync(sqlPath, 'utf8');

        console.log("Executing fix_recipes.sql...");

        // Split by semicolon? Or uses multipleStatements: true
        // fix_recipes.sql might have DELIMITER which mysql2 doesn't like.
        // I checked fix_recipes.sql, it's standard INSERTs.

        await pool.query(sqlContent);
        console.log("Recipes Fixed Successfully!");

    } catch (err) {
        console.error("Error executing script:", err);
    } finally {
        await pool.end();
    }
}

run();
