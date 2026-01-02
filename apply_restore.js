const mysql = require('mysql2/promise');
const fs = require('fs');

async function run() {
    try {
        const conn = await mysql.createConnection("mysql://root:@localhost:3306/sodalicious_db");
        console.log("Connected to DB.");

        const sql = fs.readFileSync('restore_food.sql', 'utf8');
        const statements = sql.split(';').filter(s => s.trim().length > 0);

        for (let statement of statements) {
            console.log("Executing:", statement.trim().substring(0, 50) + "...");
            await conn.query(statement);
        }

        console.log("Restoration Complete.");
        await conn.end();
        process.exit(0);
    } catch (e) {
        console.error("Error during restoration:", e);
        process.exit(1);
    }
}

run();
