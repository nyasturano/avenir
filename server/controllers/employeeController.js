const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {Employee} = require('../models/models')


class employeeController {

  async create(req, res, next) {
    try {
      const {name, email, phone, password} = req.body
      if (!name || !email || !password || !phone) {
        return next(ApiError.badRequest('Необходимо ввести все данные'))
      }
      const candidate = await Employee.findOne({
        where: {email}
      })
      if (candidate) {
        return next(ApiError.badRequest('Пользователь с такой почтой уже существует'))
      }

      const hashPassword = await bcrypt.hash(password, 5)
      const emp = await Employee.create({name, email, phone, password: hashPassword})
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
      const employee = await Employee.findAll();
      return res.status(200).json(employee);
  } catch (error) {
      return res.status(500).send(error.message);
  }
  }

  async getOne(req, res) {
    try {
        const employee = await Employee.findOne({where: {id:req.params.id}})
        return res.status(200).json(employee)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
}

module.exports = new employeeController();