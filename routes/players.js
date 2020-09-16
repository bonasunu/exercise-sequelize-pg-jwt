const Router = require('express-promise-router')
const router = new Router()
const Players = require('../models')

router.get('/', async (req, res) => {
  const players = await Players.findAll()
  res.status(200).json(players)
})

module.exports = router
