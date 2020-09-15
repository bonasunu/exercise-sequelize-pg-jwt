const db = require('../db')
const Router = require('express-promise-router')
const router = new Router()

router.get('/', async (req, res) => {
  const data = await db.query('SELECT * FROM user_game')
  if (!data.rows) throw new Error('Data does not exist')

  res.status(200).json(data.rows)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const data = await db.query('SELECT * FROM user_game WHERE user_id = $1', [
    id,
  ])
  if (!data.rows[0]) throw new Error('Data does not exist')

  res.status(200).json(data.rows[0])
})

module.exports = router
