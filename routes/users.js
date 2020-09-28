const Router = require('express-promise-router')
const router = new Router()
const db = require('../db/models')

router.get('/all', async (req, res) => {
  const users = await db.User.findAll()
  res.status(200).json(users)
})

router.get('/', async (req, res) => {
  res.json({ info: 'welcome' })
})

module.exports = router
