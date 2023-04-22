const employeeController = require('../controllers/employeeController')

const Router = require('express')
const router = new Router()

router.post('/create', employeeController.create)
router.delete('/', employeeController.delete)
router.get('/', employeeController.getAll)
router.get('/:id', employeeController.getOne)

module.exports = router;