require('dotenv').config();
import { Sequelize } from "sequelize-typescript";
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const AnswerModel = require('../models/answer.model')

const sequelize = new Sequelize(
  // URL
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/survey`,
  { logging: false, native: false }
);

AnswerModel(sequelize);

const { Answer } = sequelize.models;

module.exports = {
  Answer,
  conn: sequelize,
}