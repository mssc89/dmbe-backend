const { Pool } = require('pg');
const secret = require('../../secret')

const pool = new Pool({
  user: secret.dbUser,
  host: secret.dbHost,
  database: secret.dbName,
  password: secret.dbPassword,
  port: secret.dbPort,
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
