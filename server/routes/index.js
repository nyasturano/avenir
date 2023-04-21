const Router = require('express');
const router = new Router();

const customerRouter = require('./customerRouter')

router.use('/customer', customerRouter);

module.exports = router;