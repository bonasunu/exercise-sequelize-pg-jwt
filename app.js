const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const usersRoute = require('./routes/users')
const middleware = require('./utils/middleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/users', usersRoute)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
