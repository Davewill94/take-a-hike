'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reviews', [{
      rating: 5,
      review: 'Such a great hike',
      trail_id: 1,
      user_id: 1
    },
    {
      rating: 2,
      review: 'This could be better',
      trail_id: 1,
      user_id: 2
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
