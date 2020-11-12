'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
        name: 'David',
        password: '$2a$10$xs5F/5rm9FT4ZCSOfQme6.Qb0Cj5lFSk26xi8RMrHFuJYBuFsZ3Mq',
        email: 'david@email.com',
        location: "Davenport, IA",
        img: 'https://i.imgur.com/lsKMjwl.png',
        bio: "Just a quick little bio nothing special here"
      },
      {
        name: "William",
        password: '$2a$10$xs5F/5rm9FT4ZCSOfQme6.Qb0Cj5lFSk26xi8RMrHFuJYBuFsZ3Mq',
        email: 'bill@email.com',
        location: "Dallas, TX",
        img: 'https://i.imgur.com/lsKMjwl.png',
        bio: "People don't need to know about me."
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
