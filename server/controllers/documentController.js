const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Document} = require('../models/models')


class documentController {

  async create(req, res, next) {
    try {
      const {description, path} = req.body
      
      const emp = await Document.create({description, path})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const document = await Document.findAll();
      return res.status(200).json(document);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const document = await Document.findOne({where: {id:req.params.id}})
        return res.status(200).json(document)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new documentController();