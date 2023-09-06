import { Sequelize, DataType } from "sequelize-typescript"

module.exports = (sequelize: Sequelize) => {
  sequelize.define('Answer', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },

    full_name: {
      type: DataType.STRING(255),
      allowNull: false,
    },
  
    phone_number: {
      type: DataType.STRING(255),
      allowNull: false,
    },
  
    start_date: {
      type: DataType.STRING(255),
      allowNull: true,
    },
  
    preferred_language: {
      type: DataType.STRING(255),
      allowNull: false,
    },
  
    how_found: {
      type: DataType.STRING(255),
      allowNull: false,
    },
  
    newsletter_subscription: {
      type: DataType.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  }, { timestamps: false })
}

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