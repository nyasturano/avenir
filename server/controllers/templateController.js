const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Template} = require('../models/models')


class templateController {

  async create(req, res, next) {
    try {
      const {description, title} = req.body
      
      const emp = await Template.create({description, title})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const template = await Template.findAll();
      return res.status(200).json(template);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const template = await Template.findOne({where: {id:req.params.id}})
        return res.status(200).json(template)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new templateController();