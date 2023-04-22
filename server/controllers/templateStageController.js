const ApiError = require('../error/ApiError')
const {TemplateStage} = require('../models/models')


class templateStageController {

  async create(req, res, next) {
    try {
      const {templateId, stageDescId} = req.body
      const emp = await TemplateStage.create({templateId, stageDescId})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const templateStage = await TemplateStage.findAll();
      return res.status(200).json(stage);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const templateStage = await TemplateStage.findOne({where: {id:req.params.id}})
        return res.status(200).json(templateStage)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new templateStageController();