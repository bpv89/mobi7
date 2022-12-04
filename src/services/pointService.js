const pointModel = require('../models/pointModel');
const vehiclesPosModel = require('../models/vehiclesPosModel');
const checkPoint = require('../utilis/checkPositions');
const onPositionModel = require('../models/onPositionModel')

const findAll = async () => {
    const car = await pointModel.findAll();
    return { type: null, message: car };
  };

const insertNew = async (point) => {
  const points = await pointModel.insertNew(point);
  const cars = await vehiclesPosModel.findAll();
  const positions = [];
  cars.map((car) => {
    positions.push(checkPoint(car, [{...point, id: points}]));
  })
  const filterPositions = positions.filter(ele => Object.keys(ele).length > 0 );
  
  filterPositions.map(async (position) => await onPositionModel.insertNew(position[0]));
  return { type: null, message: 'New point inserted' };
  };

  module.exports = { findAll, insertNew };