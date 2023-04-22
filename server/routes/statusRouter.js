const statusController = require('../controllers/statusController')

const Router = require('express')
const router = new Router()

router.post('/create', statusController.create)
router.delete('/', statusController.delete)
router.get('/', statusController.getAll)
router.get('/:id', statusController.getOne)

module.exports = router;