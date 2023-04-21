const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Customer = sequelize.define('customer', {
    // id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    // email: {type: DataTypes.STRING, unique: true},
    // password: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
  });

  module.exports = {
    Customer
  }