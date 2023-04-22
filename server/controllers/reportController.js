const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Report} = require('../models/models')


class reportController {

  async create(req, res, next) {
    try {
      const {description, path} = req.body
      
      const emp = await Report.create({description, path})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const report = await Report.findAll();
      return res.status(200).json(report);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const report = await Report.findOne({where: {id:req.params.id}})
        return res.status(200).json(report)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new reportController();