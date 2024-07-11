const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 10,
  idleTimeoutMillis: 30000,
});

pool.on('error', (err, client) => {
  console.error('Error on DB conexión.');
  process.exit(-1);
});

module.exports = pool;
