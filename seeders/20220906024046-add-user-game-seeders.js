'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserGames', [{
      username: 'kyy',
      password: 'kyy123',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'esa',
      password: 'esa123',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserGames', null, {});
  }
};
