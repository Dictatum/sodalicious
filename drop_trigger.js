const { createPool } = require('mysql2/promise');

async function dropTrigger() {
    const pool = createPool({
        uri: process.env.DATABASE_URL || 'mysql://root:@localhost:3306/sodalicious_db',
        waitForConnections: true,
        connectionLimit: 1,
        queueLimit: 0
    });

    try {
        console.log('Dropping trigger trg_deduct_ingredients...');
        await pool.query('DROP TRIGGER IF EXISTS trg_deduct_ingredients');
        console.log('Trigger dropped successfully.');
    } catch (e) {
        console.error('Error dropping trigger:', e);
    } finally {
        await pool.end();
    }
}

dropTrigger();
