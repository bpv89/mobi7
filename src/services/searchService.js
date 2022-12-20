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
    const filter = vehiclePosition.filter((ele) => typeof ele === 'object');
    return { type: null, message: filter };
  };

  const findByDate = async (date) => {
   const points = await Points.findAll({ raw: true });
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
    // console.log(vehiclePosition);
    const onposition = vehiclePosition.map((vehicle) => checkposition(vehicle, points)[0]);
    const filter = onposition.filter((ele) => typeof ele === 'object');
  
    const timeOnPoints = mapPoints(filter);
    return { type: null, message: timeOnPoints };
  };

  const findAllByPlate = async (plate) => {
    const points = await Points.findAll({ raw: true });
    const { placa } = plate;
    
    const vehiclePosition = await VehiclePos.findAll({ 
      raw: true, include: [{ model: Cars, as: 'car', attributes: { exclude: ['id']},
     }] });
     const filterPlate = vehiclePosition.filter((ele) => ele['car.placa'] === placa);
     const onposition = filterPlate.map((vehicle) => checkposition(vehicle, points)[0]);
     const filter = onposition.filter((ele) => typeof ele === 'object');
     
     return { type: null, message: filter };     
  };

  const findByPlate = async (plate) => {  
    const onposition = await findAllByPlate(plate); 
    console.log(onposition);   
    const timeOnPoints = mapPoints(onposition.message);
    return { type: null, message: timeOnPoints };     
  };

  



  module.exports = { findAll, findByDate, findByPlate, findAllByPlate };