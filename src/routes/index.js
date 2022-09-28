const { index, login, private } = require('../controllers/main.controller')
const auth = require('../midlewares/auth')

router = require('express').Router()

router.get('/', index)

router.post('/login', login)

router.get('/private', auth, private)

module.exports = router;