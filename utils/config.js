require('dotenv').config

const PORT = process.env.PORT
const TEST_DB = process.env.TEST_DB

module.exports = {
  PORT,
  TEST_DB,
}
