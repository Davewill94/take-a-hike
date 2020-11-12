'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('trails', [
    {
      title: 'Schuetzen Park Wanderweg',
      trail_id: 7072869,
      type: "Recommended Route",
      image: "https://cdn2.apstatic.com/photos/hike/7056240_medium_1555711056.jpg",
      difficulty: "black",
      description: "Hike back in time... A modern urban forest that was once an amusement park!",
      rating: 4,
      length: 1,
      location: "Davenport, Iowa",
      lat: 41.5246,
      lng: -90.6199,
      userId: 1
    },
    {
      title: 'Kleine Wanderweg',
      trail_id: 7073292,
      type: "Trail",
      image:  "https://cdn2.apstatic.com/photos/hike/7056240_medium_1555711056.jpg",
      difficulty: "green",
      description: "Needs Summary",
      rating: 3,
      length: 0.2,
      location: "Davenport, Iowa",
      lat: 41.5253,
      lng: -90.6253,
      userId: 2
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('trails', null, {});
  }
};
