const Router = require('express-promise-router')
const router = new Router()
const auth = require('../controllers/authController')
const restrict = require('../utils/restrict')

router.get('/whoami', restrict, auth.whoami)

router.get('/', async (req, res) => {
  res.json({ info: 'welcome' })
})

router.get('/login', async (req, res) => await res.render('login'))

router.get('/register', async (req, res) => await res.render('register'))

router.post('/register', auth.register)

router.post('/login', auth.login)

module.exports = router
