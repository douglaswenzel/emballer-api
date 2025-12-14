'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const andaresData = [];

    for (let i = 1; i <= 14; i++) {
      andaresData.push({
        numero_andar: i,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('Andares', andaresData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Andares', null, {});
  }
};