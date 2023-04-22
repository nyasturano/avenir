const reportController = require('../controllers/reportController')

const Router = require('express')
const router = new Router()

router.post('/create', reportController.create)
router.delete('/', reportController.delete)
router.get('/', reportController.getAll)
router.get('/:id', reportController.getOne)

module.exports = router;