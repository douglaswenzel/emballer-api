'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Salas', {
      id_sala: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_andar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Andares',
          key: 'id_andar'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      numero_sala: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      identificacao_completa: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Salas');
  }
};