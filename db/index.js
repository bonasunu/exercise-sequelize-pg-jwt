const { Pool } = require('pg')
const config = require('../utils/config')

let pool = new Pool()

if (process.env.NODE_ENV === 'test') {
  pool = new Pool({
    database: config.TEST_DB,
  })
}

module.exports = pool
