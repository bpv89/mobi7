'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    const { checkPosition } = require('../services/checkposition')
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
      vehiclesWithId.push({ ...vehicle, carId: getId.indexOf(vehicle.placa) +1 });
    });


    const vehiclesByCarId = vehiclesWithId.map(({ placa, ...vehicleInfo }) => vehicleInfo );
    // console.log(vehiclesByCarId);


    // Adiciona as posicões em que os carros estão dentro dos pontos
    const positions = [];
    vehiclesByCarId.map((car, indexcar) => {  
      plates.push({ }) 
      points.map((point, indexPoint) => {
      const inPosition = checkPosition(car.latitude, car.longitude, point.latitude, point.longitude, point.raio);
      inPosition ? 
      positions.push({ point_id: indexPoint +1 , vehicle_id: indexcar + 1, car_id: car.carId }) 
      : null;
    });  
    
  });
    await queryInterface.bulkInsert('Cars', cars, {});
    await queryInterface.bulkInsert('Points', points, {});
    await queryInterface.bulkInsert('Vehicles', vehiclesByCarId, {});
    await queryInterface.bulkInsert('OnPosition', positions, {});
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Points', null, {});
    await queryInterface.bulkDelete('Vehicles', null, {});
    await queryInterface.bulkDelete('OnPosition', null, {});
     
  }
};
