const ApiError = require('../error/ApiError')
const {Project, Stage} = require('../models/models')


class projectController {

  async create(req, res, next) {
    try {
      const {name, employerId, employeeId} = req.body
      if (!name) {
        return next(ApiError.badRequest('Укажите название'))
      }
      const emp = await Project.create({name, employerId, employeeId})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const project = await Project.findAll();
      return res.status(200).json(project);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const project = await Project.findOne({where: {id:req.params.id}})
        return res.status(200).json(project)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

  async getStages(req, res) {
      try {
        const stages = await Stage.findAll({where: {projectId:req.params.id}})
        return res.status(200).json(stages)
    } catch (error) {
        return res.status(500).send(error.message)
    }
  }
}

module.exports = new projectController();