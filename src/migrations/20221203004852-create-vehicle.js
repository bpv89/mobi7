'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('Vehicles', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, 
      },
    placa: {
      type: Sequelize.STRING,
    },
    data_posicao: {
      type: Sequelize.DATE,
    },
    velocidade: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.DECIMAL,
    },
    longitude: {
      type: Sequelize.DECIMAL,
    },
    ignicao: {
      type: Sequelize.BOOLEAN,
    }

    })
    await queryInterface.createTable('Points', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, 
      },
      nome: {
      type: Sequelize.STRING,
    },
    raio: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.DECIMAL,
    },
    longitude: {
      type: Sequelize.DECIMAL,
    },
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Vehicles');
    await queryInterface.dropTable('Points');

  }
};
