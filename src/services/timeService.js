const { Cars, Points, VehiclePos } = require('../models');
const checkposition = require('../utilis/checkPositions');
const mapPoints = require('../utilis/mapPoints');

const findAll = async () => {
  const points = await Points.findAll({ raw: true });
  const vehicleposition = await VehiclePos.findAll({ raw: true, include: [{
    model: Cars, as: 'car', attributes: { exclude: ['id']},
  }] });
  const onposition = vehicleposition.map((vehicle) => checkposition(vehicle, points)[0]);
  const filter = onposition.filter((ele) => typeof ele === 'object');

  // console.log(filter);
  const timeOnPoints = mapPoints(filter);
  return { type: null, message: timeOnPoints };
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