'use strict';

const converterCSV = require('../../csvTransformer');
const basePoints = 'base_pois_def.csv'
const vehiclesPositions = 'posicoes.csv'
var point = 39.807222; 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Points', converterCSV(basePoints), {});
    await queryInterface.bulkInsert('Vehicles', converterCSV(vehiclesPositions), {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Points', null, {});
    await queryInterface.bulkDelete('Vehicles', null, {});
     
  }
};
