'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        name: "Ashley Galvin"
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: "Patrick Beach"
      }]),
      queryInterface.bulkInsert('Authors', [{
        name: "MacKenzie MIller"
      }])
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
