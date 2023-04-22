const stageReportController = require('../controllers/stageReportController')

const Router = require('express')
const router = new Router()

router.post('/create', stageReportController.create)
router.delete('/', stageReportController.delete)
router.get('/', stageReportController.getAll)
router.get('/:id', stageReportController.getOne)

module.exports = router;