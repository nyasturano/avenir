const employerController = require('../controllers/employerController')

const Router = require('express')
const router = new Router()

router.post('/create', employerController.create)
router.delete('/', employerController.delete)
router.get('/', employerController.getAll)
router.get('/:id', employerController.getOne)

module.exports = router;