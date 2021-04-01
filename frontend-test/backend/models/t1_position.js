'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class T1_POSITION extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      T1_POSITION.hasMany(models.T2_EMPLOYEE, {
        foreignKey: 'POSITION_ID',
        target: 'id'
      })
    }
  };
  T1_POSITION.init({
    CODE: DataTypes.STRING,
    NAME: DataTypes.STRING,
    IS_DELETE: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'T1_POSITION',
  });
  return T1_POSITION;
};