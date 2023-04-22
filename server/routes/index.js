const Router = require('express');
const router = new Router();

const employerRouter = require('./employerRouter')
const employeeRouter = require('./employeeRouter')
const projectRouter = require('./projectRouter')
const stageReportRouter = require('./stageReportRouter')
const stageRouter = require('./stageRouter')
const statusRouter = require('./statusRouter')
const reportRouter = require('./reportRouter')
const templateRouter = require('./templateRouter')
const templateStageDescRouter = require('./templateStageDescRouter')
const stageDescRouter = require('./stageDescRouter')
const stageDescDocumentRouter = require('./stageDescDocumentRouter')
const documentRouter = require('./documentRouter')


router.use('/employer', employerRouter);
router.use('/employee', employeeRouter);
router.use('/project', projectRouter);
router.use('/stageReport', stageReportRouter);
router.use('/stage', stageRouter);
router.use('/status', statusRouter);
router.use('/report', reportRouter);
router.use('/template', templateRouter);
router.use('/templateStageDesc', templateStageDescRouter);
router.use('/stageDesc', stageDescRouter);
router.use('/stageDescDocument', stageDescDocumentRouter);
router.use('/document', documentRouter);





module.exports = router;