const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'password',
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,

});

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback);
    },
    end: () => {
        pool.end();
    },
};