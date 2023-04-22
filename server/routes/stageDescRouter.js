const stageDescController = require('../controllers/stageDescController')

const Router = require('express')
const router = new Router()

router.post('/create', stageDescController.create)
router.delete('/', stageDescController.delete)
router.get('/', stageDescController.getAll)
router.get('/:id', stageDescController.getOne)

module.exports = router;