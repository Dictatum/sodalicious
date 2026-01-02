const { createPool } = require('mysql2/promise');

async function checkTables() {
    const pool = createPool({
        uri: process.env.DATABASE_URL || 'mysql://root:@localhost:3306/sodalicious_db',
        waitForConnections: true,
        connectionLimit: 1,
        queueLimit: 0
    });

    try {
        console.log('Checking sodalicious_db tables...');
        const [rows] = await pool.query("SHOW TABLES");
        console.log('Tables found:', rows);

        if (rows.length === 0) {
            console.error('CRITICAL: Database is empty! No tables found.');
        } else {
            console.log('Database seems populated.');
            // Check count of products
            const [products] = await pool.query("SELECT COUNT(*) as count FROM products");
            console.log('Product count:', products[0].count);
        }
    } catch (e) {
        console.error('Error checking DB:', e);
    } finally {
        await pool.end();
    }
}

checkTables();
