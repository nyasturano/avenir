const ApiError = require('../error/ApiError')
const {Customer} = require('../models/models')

const uuid = require('uuid')
const path = require('path')

class customerController {
    async create(req, res) {
        try {
            const {img} = req.files
            let fileName = uuid.v4() + '.docx'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const customer = await Customer.create({img: fileName})
            return res.json(customer)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new customerController();