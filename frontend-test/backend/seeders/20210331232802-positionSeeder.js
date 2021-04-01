'use strict';
const date = new Date()

const data = [
  {
    CODE: "SA",
    NAME: "System Analyst",
    IS_DELETE: 0,
    createdAt: date,
    updatedAt: date
  },
  {
    CODE: "BPS",
    NAME: "BPS",
    IS_DELETE: 0,
    createdAt: date,
    updatedAt: date
  },
  {
    CODE: "PRG",
    NAME: "Programmer",
    IS_DELETE: 0,
    createdAt: date,
    updatedAt: date
  },
  {
    CODE: "TEST",
    NAME: "Tester",
    IS_DELETE: 0,
    createdAt: date,
    updatedAt: date
  },
  {
    CODE: "Help",
    NAME: "Helpdesk",
    IS_DELETE: 0,
    createdAt: date,
    updatedAt: date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('T1_POSITIONs', data)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('T1_POSITIONs', null)
  }
};
