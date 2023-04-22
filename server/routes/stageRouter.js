const stageController = require('../controllers/stageController')

const Router = require('express')
const router = new Router()

router.post('/create', stageController.create)
router.delete('/', stageController.delete)
router.get('/', stageController.getAll)
router.get('/:id', stageController.getOne)

module.exports = router;