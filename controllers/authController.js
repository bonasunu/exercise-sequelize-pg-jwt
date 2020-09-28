const { User } = require('../db/models')
const passport = require('../lib/passport')

const format = (user) => {
  const { id, username } = user
  return {
    id,
    username,
    accessToken: user.generateToken(),
  }
}

module.exports = {
  login: async (req, res) => {
    const user = await User.authenticate(req.body)
    res.json(format(user))
  },
  register: async (req, res) => {
    await User.register(req.body)
    res.redirect('/api/users/login')
  },
}
