const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Employer} = require('../models/models')


class employerController {

  async create(req, res, next) {
    try {
      const {name, email, password} = req.body
      if (!name || !email || !password) {
        return next(ApiError.badRequest('Необходимо ввести все данные'))
      }
      const candidate = await Employer.findOne({
        where: {email}
      })
      if (candidate) {
        return next(ApiError.badRequest('Пользователь с такой почтой уже существует'))
      }

      const hashPassword = await bcrypt.hash(password, 5)
      const emp = await Employer.create({name, email, password: hashPassword})
      //const token = generateJwt(user.id, login, role)
      return res.json({token:emp.id })
    } catch (error){
      return res.send(error.message)
    }
  }


  async delete(req, res) {
    
  }

  async getAll(req, res) {
    try {
      const employer = await Employer.findAll();
      return res.status(200).json(employer);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const employer = await Employer.findOne({where: {id:req.params.id}})
        return res.status(200).json(employer)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new employerController();