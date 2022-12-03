'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
     'OnPosition', {
      pointId: {
        type: Sequelize.INTEGER,
        field: 'point_id',
        references: {
          model: 'Points',
          key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      primaryKey: true,
      },
    vehicleId: {
      type: Sequelize.INTEGER,
      field: 'vehicle_id',
      references: {
        model: 'Vehicles',
        key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,

      },
      car_id: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('OnPosition');
  }
};
