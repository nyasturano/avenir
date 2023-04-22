const ApiError = require('../error/ApiError')
const {Stage} = require('../models/models')


class stageController {

  async create(req, res, next) {
    try {
      const {name, projectId, statusId} = req.body
      if (!name) {
        return next(ApiError.badRequest('Укажите название'))
      }
      const emp = await Stage.create({name, projectId, statusId})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const stage = await Stage.findAll();
      return res.status(200).json(stage);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const stage = await Stage.findOne({where: {id:req.params.id}})
        return res.status(200).json(stage)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new stageController();