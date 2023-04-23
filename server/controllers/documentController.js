const ApiError = require('../error/ApiError')
const {Document} = require('../models/models')
const uuid = require('uuid')
const path = require('path')

function ext(name) {
  var m = name.match(/\.([^.]+)$/)
  return m && m[1]
}

class documentController {

  

  async create(req, res, next) {
    try {
      const {file} = req.files
      console.log(file.name)
      let fileName = uuid.v4() + "." + ext(file.name);
      file.mv(path.resolve(__dirname, '..', 'static', fileName))
      
      const emp = await Document.create({description: file.name, path: fileName})
      return res.json({emp})
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