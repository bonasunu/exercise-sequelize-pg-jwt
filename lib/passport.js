const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('../db/models')
require('dotenv').config()

const options = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.SECRET,
}

passport.use(
  new JwtStrategy(options, async (payload, done) => {
    const user = await User.findByPk(payload.id)
    return done(null, user)
  })
)

module.exports = passport
