const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const passport = require('./lib/passport')
const usersRoute = require('./routes/users')
const middleware = require('./utils/middleware')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.set('view engine', 'ejs')
app.use('/api/users', usersRoute)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
