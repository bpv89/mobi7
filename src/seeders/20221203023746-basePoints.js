'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const { checkPosition } = require('../services/checkposition')
    const converterCSV = require('../../csvTransformer');
    const basePoints = 'base_pois_def.csv'
    const vehiclesPositions = 'posicoes.csv'
    const points = converterCSV(basePoints);
    const vehicles = converterCSV(vehiclesPositions);
    const obj = [];
    const verify = vehicles.map((car, index) => {   
      const middler = [];    
      points.map((point) => {
      const inPosition = checkPosition(car.latitude, car.longitude, point.latitude, point.longitude, point.raio);
      inPosition ? middler.push({ ...car, onPosition: point.nome }) : null;
    });  
    middler.length < 1 ? obj[index] = middler : obj.push({ ...car, onPosition: null });

  });
  // console.log(obj);
    await queryInterface.bulkInsert('Points', points, {});
    await queryInterface.bulkInsert('Vehicles', obj, {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Points', null, {});
    await queryInterface.bulkDelete('Vehicles', null, {});
     
  }
};
