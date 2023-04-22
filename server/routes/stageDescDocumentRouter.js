const stageDescDocumentController = require('../controllers/stageDescDocumentController')

const Router = require('express')
const router = new Router()

router.post('/create', stageDescDocumentController.create)
router.delete('/', stageDescDocumentController.delete)
router.get('/', stageDescDocumentController.getAll)
router.get('/:id', stageDescDocumentController.getOne)

module.exports = router;