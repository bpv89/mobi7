const { Cars, Points, VehiclePos } = require('../models');
const checkposition = require('../utilis/checkPositions');

const findAll = async () => {
    const points = await Points.findAll({ raw: true });
    const vehicleposition = await VehiclePos.findAll({ raw: true, include: [{
      model: Cars, as: 'car', attributes: { exclude: ['id']},
    }] });
    const onposition = vehicleposition.map((vehicle) => checkposition(vehicle, points)[0]);
    const filter = onposition.filter((ele) => typeof ele === 'object');
    return { type: 200, message: filter };
  };



  module.exports = { findAll };