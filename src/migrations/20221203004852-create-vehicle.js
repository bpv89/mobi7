'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable('VehiclesPos', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, 
      },
    carId: {
      field: 'car_id',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      foreingKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
      references: { model: 'Cars', key: 'id'},
      },
    data_posicao: {
      type: Sequelize.DATE,
    },
    velocidade: {
      type: Sequelize.INTEGER,
    },
    latitude: {
      type: Sequelize.DECIMAL(10,8),
    },
    longitude: {
      type: Sequelize.DECIMAL(10,8),
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
      type: Sequelize.DECIMAL(10,7),
    },
    longitude: {
      type: Sequelize.DECIMAL(10,7),
    },
    })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('VehiclesPos');
    await queryInterface.dropTable('Points');

  }
};
