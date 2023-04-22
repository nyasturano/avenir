const ApiError = require('../error/ApiError')
const {TemplateStageDesc} = require('../models/models')


class templateStageDescController {

  async create(req, res, next) {
    try {
      const {templateId, stageDescId} = req.body
      const emp = await TemplateStageDesc.create({templateId, stageDescId})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const templateStageDesc = await TemplateStageDesc.findAll();
      return res.status(200).json(templateStageDesc);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const templateStageDesc = await TemplateStageDesc.findOne({where: {id:req.params.id}})
        return res.status(200).json(templateStageDesc)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new templateStageDescController();