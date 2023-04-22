const ApiError = require('../error/ApiError')
const {Status} = require('../models/models')


class statusController {

  async create(req, res, next) {
    try {
      const {status} = req.body
      if (!status) {
        return next(ApiError.badRequest('Укажите название'))
      }
      const emp = await Status.create({status})
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const status = await Status.findAll();
      return res.status(200).json(status);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const status = await Status.findOne({where: {id:req.params.id}})
        return res.status(200).json(status)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new statusController();