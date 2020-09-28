const Router = require('express-promise-router')
const router = new Router()
const db = require('../db/models')
const auth = require('../controllers/authController')

router.get('/', async (req, res) => {
  res.json({ info: 'welcome' })
})

router.get('/login', async (req, res) => await res.render('login'))

router.get('/register', async (req, res) => await res.render('register'))

router.post('/register', auth.register)

router.post('/login', auth.login)

module.exports = router
