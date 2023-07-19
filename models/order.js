'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    details: DataTypes.STRING,
    total: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: true,
  });
  return Order;
};