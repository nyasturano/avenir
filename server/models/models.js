const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const Employer = sequelize.define('employer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
  });

const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
  });

const Employee = sequelize.define('employee', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    phone: {type: DataTypes.DECIMAL, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
  });

// employer - заказчик; employee - работник (субподрядчик)
Employer.hasMany(Project)
Project.belongsTo(Employer)

Employee.hasMany(Project)
Project.belongsTo(Employee)

const Stage = sequelize.define('stage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
  });

Project.hasMany(Stage)
Stage.belongsTo(Project)

const StageReport = sequelize.define('stage_report', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  });

const StageDesc = sequelize.define('stage_desc', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
  });

Stage.hasOne(StageDesc)
StageDesc.hasOne(Stage)

const StageDescDocument = sequelize.define('stage_desc_document', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  });

const Document = sequelize.define('document', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING},
    path: {type: DataTypes.STRING},
  });

StageDesc.belongsToMany(Document, {through: StageDescDocument})
Document.belongsToMany(StageDesc, {through: StageDescDocument})

const TemplateStage = sequelize.define('template_stage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  });
const Template = sequelize.define('template', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
  });

StageDesc.belongsToMany(Template, {through: TemplateStage})
Template.belongsToMany(StageDesc, {through: TemplateStage})

const Report = sequelize.define('report', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING},
    path: {type: DataTypes.STRING},
  });

Stage.belongsToMany(Report, {through: StageReport})
Report.belongsToMany(Stage, {through: StageReport})

const Status = sequelize.define('status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING},
  });
Stage.hasOne(Status)
Status.hasOne(Stage)

  module.exports = {
    Employer,
    Employee,
    Stage,
    StageDesc,
    StageDescDocument,
    StageReport,
    Status,
    Report,
    Template,
    TemplateStage,
    Document,
    Project
  }