'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    const converterCSV = require('../../csvTransformer');
    const basePoints = 'base_pois_def.csv'
    const vehiclesPositions = 'posicoes.csv'
    const points = converterCSV(basePoints);
    const vehicles = converterCSV(vehiclesPositions);


    //Adiciona os carros unicos
    const plates = [... new Set(vehicles.map((vehicle) => vehicle.placa))]; 
    const cars = [];
    plates.map(plate => cars.push({ placa: plate }))

    // Adiciona o Id da PLaca
    const vehiclesWithId = [];
    const getId = cars.map(a => a.placa);
    vehicles.map((vehicle) => {
      vehiclesWithId.push({ ...vehicle, car_id: getId.indexOf(vehicle.placa) +1 });
    });


    const vehiclesByCarId = vehiclesWithId.map(({ placa, ...vehicleInfo }) => vehicleInfo );
    // console.log(vehiclesByCarId);

    await queryInterface.bulkInsert('Cars', cars, {});
    await queryInterface.bulkInsert('Points', points, {});
    await queryInterface.bulkInsert('VehiclesPos', vehiclesByCarId, {});
    // await queryInterface.bulkInsert('OnPosition', positions, {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cars', null, {});
    await queryInterface.bulkDelete('Points', null, {});
    await queryInterface.bulkDelete('VehiclesPos', null, {});
     
  }
};
