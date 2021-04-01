'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('T2_EMPLOYEEs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NAME: {
        allowNull: false,
        type: Sequelize.STRING
      },
      BIRTH_DATE: {
        allowNull: false,
        type: Sequelize.DATE
      },
      POSITION_ID: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ID_NUMBER: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER
      },
      GENDER: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      IS_DELETE: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('T2_EMPLOYEEs');
  }
};