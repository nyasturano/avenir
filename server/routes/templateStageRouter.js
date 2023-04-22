const templateStageController = require('../controllers/templateStageController')

const Router = require('express')
const router = new Router()

router.post('/create', templateStageController.create)
router.delete('/', templateStageController.delete)
router.get('/', templateStageController.getAll)
router.get('/:id', templateStageController.getOne)

module.exports = router;