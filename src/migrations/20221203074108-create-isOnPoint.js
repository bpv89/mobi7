'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
     'Vehicles', 'onPosition', Sequelize.STRING,
  );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
    await queryInterface.removeColumn('onPosition');

  }
};
