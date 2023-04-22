const templateController = require('../controllers/templateController')

const Router = require('express')
const router = new Router()

router.post('/create', templateController.create)
router.delete('/', templateController.delete)
router.get('/', templateController.getAll)
router.get('/:id', templateController.getOne)

module.exports = router;