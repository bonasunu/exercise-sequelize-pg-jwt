const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const playersRoute = require('./routes/players')
const middleware = require('./utils/middleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/players', playersRoute)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
