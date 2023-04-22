const ApiError = require('../error/ApiError')
const {StageReport} = require('../models/models')


class stageReportController {

  async create(req, res, next) {
    try {
      const {projectId, stageId} = req.body
      const emp = await StageReport.create({projectId, stageId})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const stageReport = await StageReport.findAll();
      return res.status(200).json(stageReport);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const stageReport = await StageReport.findOne({where: {id:req.params.id}})
        return res.status(200).json(stageReport)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new stageReportController();