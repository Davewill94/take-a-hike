'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('reviews', [{
      rating: 5,
      review: 'Such a great hike',
      trailId: 1,
      userId: 1
    },
    {
      rating: 2,
      review: 'This could be better',
      trailId: 1,
      userId: 2
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
