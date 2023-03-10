'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('UserGameBios', [{
      UserGameId: 1,
      dob: new Date(),
      pob: "Malang",
      city: "Malang",
      gender: "Male",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      UserGameId: 2,
      dob: new Date(),
      pob: "Makassar",
      city: "Makassar",
      gender: "Male",
      createdAt: new Date(),
      updatedAt: new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('UserGameBios', null, {});
  }
};
