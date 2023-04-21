const customerController = require('../controllers/customerController')

const Router = require('express')
const router = new Router()

router.post('/create', customerController.create)

module.exports = router;