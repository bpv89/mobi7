const { Cars, Points, VehiclePos } = require('../models');
const { Op } = require('sequelize');
const checkposition = require('../utilis/checkPositions');
const mapPoints = require('../utilis/mapPoints');

const findAll = async (date) => {
   const { lower, upper } = date;
   let vehiclePosition;
   if (!upper) {
    vehiclePosition = await VehiclePos.findAll({ 
      where: { data_posicao: { 
         [Op.gt]: lower,
       }},
      raw: true, include: [{ model: Cars, as: 'car', attributes: { exclude: ['id']},
    }] });
   } else if (!lower) {
    vehiclePosition = await VehiclePos.findAll({ 
      where: { data_posicao: { 
         [Op.lt]: upper,
       }},
      raw: true, include: [{ model: Cars, as: 'car', attributes: { exclude: ['id']},
    }] });
   }
    else {
      vehiclePosition = await VehiclePos.findAll({ 
       where: { data_posicao: { 
          [Op.gt]: lower,
          [Op.lt]: upper
        }},
       raw: true, include: [{ model: Cars, as: 'car', attributes: { exclude: ['id']},
     }] });

   }
   if (vehiclePosition.length > 0) {
     const filter = vehiclePosition.filter((ele) => typeof ele === 'object');
     return { type: 200, message: filter };    
   }
   return { type: 404, message: 'No records on that date' };  
  };

  const findByDate = async (date) => {
   const points = await Points.findAll({ raw: true });

   const allVehicles = await findAll(date);
   if (allVehicles.type === 404 ) {
    return allVehicles;
   }
   const vehiclePosition = allVehicles.message;  

    const onposition = vehiclePosition.map((vehicle) => checkposition(vehicle, points)[0]);
    const filter = onposition.filter((ele) => typeof ele === 'object');
  
    const timeOnPoints = mapPoints(filter);
    return { type: 200, message: timeOnPoints };
  };

  const findAllByPlate = async (plate) => {
    const points = await Points.findAll({ raw: true });
    const { placa } = plate;    
    const vehiclePosition = await VehiclePos.findAll({ 
      raw: true, include: [{ model: Cars, as: 'car', attributes: { exclude: ['id']},
     }] });
     if (vehiclePosition) {
       const filterPlate = vehiclePosition.filter((ele) => ele['car.placa'] === placa);
       if (filterPlate.length < 1) {
        return { type: 404, message: 'Plate Not Found' };    
       }
       const onposition = filterPlate.map((vehicle) => checkposition(vehicle, points)[0]);
       const filter = onposition.filter((ele) => typeof ele === 'object');
      //  console.log(filterPlate);
       
       return { type: 200, message: filter };        
     }
  };

  const findAllByDatePlate = async (search) => {
    const points = await Points.findAll({ raw: true });
    const { plate, upper, lower } = search;
    const allVehicles = await findAll({ lower, upper });

    if (allVehicles.type === 404) {
      return allVehicles;
    }
    const vehiclePosition = allVehicles.message;
    const filterPlate = vehiclePosition.filter((ele) => ele['car.placa'] === plate);

    if (filterPlate.length < 1) {
      return { type: 404, message: 'Plate Not Found' };    
     }

    const onposition = filterPlate.map((vehicle) => checkposition(vehicle, points)[0]);
    const filter = onposition.filter((ele) => typeof ele === 'object');  
    return { type: 200, message: filter }; 
  }

  const findByPlate = async (plate) => {  
    const onposition = await findAllByPlate(plate); 
    if (onposition.type === 404) {
      return onposition
    }
    const timeOnPoints = mapPoints(onposition.message);
    return { type: 200, message: timeOnPoints };     
  };



  const findByDatePlate = async (search) => {
    const onposition = await findAllByDatePlate(search); 
    
    if (onposition.type === 404) {
      return onposition;      
    }
    const timeOnPoints = mapPoints(onposition.message);
    return { type: 200, message: timeOnPoints };  
  };



  module.exports = { findAll, findByDate, findByPlate, findAllByPlate, findAllByDatePlate, findByDatePlate };