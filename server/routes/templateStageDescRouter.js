const templateStageDescController = require('../controllers/templateStageDescController')

const Router = require('express')
const router = new Router()

router.post('/create', templateStageDescController.create)
router.delete('/', templateStageDescController.delete)
router.get('/', templateStageDescController.getAll)
router.get('/:id', templateStageDescController.getOne)

module.exports = router;