const ApiError = require('../error/ApiError')
const {StageDescDocument} = require('../models/models')


class stageDescDocumentController {

  async create(req, res, next) {
    try {
      const {stageDescId, documentId} = req.body
      const emp = await StageDescDocument.create({stageDescId, documentId})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const stageDescDocument = await StageDescDocument.findAll();
      return res.status(200).json(stageDescDocument);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }
  
  async getOne(req, res) {
    try {
        const stageDescDocument = await StageDescDocument.findOne({where: {id:req.params.id}})
        return res.status(200).json(stageDescDocument)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new stageDescDocumentController();