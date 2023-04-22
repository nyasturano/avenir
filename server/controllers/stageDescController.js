const ApiError = require('../error/ApiError')
const {StageDesc} = require('../models/models')


class stageDescController {

  async create(req, res, next) {
    try {
      const {name} = req.body
      if (!name) {
        return next(ApiError.badRequest('Укажите название'))
      }
      const emp = await StageDesc.create({name})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const stageDesc = await StageDesc.findAll();
      return res.status(200).json(stageDesc);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const stageDesc = await StageDesc.findOne({where: {id:req.params.id}})
        return res.status(200).json(stageDesc)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new stageDescController();