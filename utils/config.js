require('dotenv').config({ path: '../.env' })

const PORT = process.env.PORT
const DB = process.env.PGDATABASE
const USER = process.env.PGUSER
const PASS = process.env.PGPASSWORD
const DB_PORT = process.env.PGPORT
const HOST = process.env.PGHOST

console.log(PORT)
console.log(process.env.PORT)

module.exports = {
  PORT,
  DB,
  USER,
  PASS,
  DB_PORT,
  HOST,
}
