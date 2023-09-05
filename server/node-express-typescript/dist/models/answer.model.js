"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
module.exports = (sequelize) => {
    sequelize.define('Answer', {
        id: {
            type: sequelize_typescript_1.DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: false,
        },
        phone: {
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: false,
        },
        date: {
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: true,
        },
        language: {
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: false,
        },
        howfound: {
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: false,
        },
        newlettersub: {
            type: sequelize_typescript_1.DataType.STRING(255),
            allowNull: true,
            defaultValue: false,
            field: "newlettersub"
        },
    }, { timestamps: false });
};
/*import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "answers",
})

export default class Answer extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "name"
  })
  name?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "phone"
  })
  phone?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    field: "date"
  })
  date?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "language"
  })
  language?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    field: "howfound"
  })
  howfound?: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
    defaultValue: false,
    field: "newlettersub"
  })
  newlettersub?: boolean;
}
*/ 
