const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'rodrigonode',
    database: 'WilsterDB',
    port: '5432'
});

module.exports = pool;