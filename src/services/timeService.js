const timeModel = require('../models/timeModel');
const mapPoints = require('../utilis/mapPoints');

const findAll = async () => {
    const cars = await timeModel.findAll();
    const vehicle = mapPoints(cars);
    return { type: null, message: vehicle };  
  };

  const findByDate = async (date) => {
      const cars = await timeModel.findByDate(date);
      if (cars.type || cars.length < 1) {
        return { type: 'INVALID_VALUE', message: 'No Vehicles Found on that date' };
      }
      const vehicle = mapPoints(cars);
      return { type: null, message: vehicle };
  };

  const findByPlate = async (plate) => {
      const cars = await timeModel.findByPlate(plate);
      if (cars.type || cars.length < 1) {
        return { type: 'INVALID_VALUE', message: 'No Vehicles Found on that license plate' };
      }
      const vehicle = mapPoints(cars);
      return { type: null, message: vehicle };
  };

  module.exports = { findAll, findByDate, findByPlate };