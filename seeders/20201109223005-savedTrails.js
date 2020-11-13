'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('savedtrails', [
    {
      user_id: 1,
      trail_id:1
    },
    {
      user_id: 1,
      trail_id: 2
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("savedtrails", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
