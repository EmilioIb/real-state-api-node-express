const pool = require('../db/db.js');

async function executeQuery(text, values, firstRow) {
  const client = await pool.connect();
  try {
    const result = await client.query({
      text,
      values,
    });

    return firstRow ? result.rows[0] : result.rows;
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
}

module.exports = {
  executeQuery,
};
