'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class T2_EMPLOYEE extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      T2_EMPLOYEE.belongsTo(models.T1_POSITION, {
        foreignKey: 'POSITION_ID'
      })
    }
  };
  T2_EMPLOYEE.init({
    NAME: DataTypes.STRING,
    BIRTH_DATE: DataTypes.DATE,
    POSITION_ID: DataTypes.INTEGER,
    ID_NUMBER: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    },
    GENDER: DataTypes.INTEGER,
    IS_DELETE: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'T2_EMPLOYEE',
  });
  return T2_EMPLOYEE;
};