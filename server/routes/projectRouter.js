const projectController = require('../controllers/projectController')

const Router = require('express')
const router = new Router()

router.post('/create', projectController.create)
router.delete('/', projectController.delete)
router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)
router.get('/stages/:id', projectController.getStages)

module.exports = router;