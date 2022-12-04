const vehiclesPos = require('../models/vehiclesPosModel');
const carModel = require('../models/carModel');
const checkPoint = require('../utilis/checkPositions');
const pointModel = require('../models/pointModel');
const onPositionModel = require('../models/onPositionModel')

  const findAll = async () => {
    const car = await vehiclesPos.findAll();
    return { type: null, message: car };
  };

  const insertNew = async (position) => {
    const { placa, data_posicao, velocidade, latitude, longitude, ignicao } = position;
    const carId = await carModel.findPlate({placa});
    const newVehiclePos = { carId, data_posicao, velocidade, latitude, longitude, ignicao };
    const car = await vehiclesPos.insertNew(newVehiclePos);
    const points = await pointModel.findAll();
    const checkPosition = checkPoint({...newVehiclePos, id: car }, points);
    checkPosition.map(async (position) => await onPositionModel.insertNew(position));
  

    return { type: null, message: `Vehicle inserted on pisition ${car}` };
    };

  module.exports = { findAll, insertNew };