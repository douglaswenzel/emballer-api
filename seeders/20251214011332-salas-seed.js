'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const [andares, metadata] = await queryInterface.sequelize.query(
      `SELECT id_andar, numero_andar from "Andares" ORDER BY numero_andar ASC;`
    );

    const salasData = [];

    andares.forEach(andar => {
      const { id_andar, numero_andar } = andar;
      const identificacaoSala1 = (numero_andar * 10) + 1;
      salasData.push({
        id_andar: id_andar,
        numero_sala: '01',
        identificacao_completa: identificacaoSala1.toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      });

      const identificacaoSala2 = (numero_andar * 10) + 2;
      salasData.push({
        id_andar: id_andar,
        numero_sala: '02',
        identificacao_completa: identificacaoSala2.toString(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    });

    await queryInterface.bulkInsert('Salas', salasData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Salas', null, {});
  }
};