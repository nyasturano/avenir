const documentController = require('../controllers/documentController')

const Router = require('express')
const router = new Router()

router.post('/create', documentController.create)
router.delete('/', documentController.delete)
router.get('/', documentController.getAll)
router.get('/:id', documentController.getOne)

module.exports = router;