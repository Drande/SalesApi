import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

export class Order extends Model {}

Order.init({
  // Model attributes are defined here
  details: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: Order.name, // We need to choose the model name
  timestamps: true,
});