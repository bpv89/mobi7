const vehiclesPos = require('../models/vehiclesPosModel');

const findAll = async () => {
    const car = await vehiclesPos.findAll();
    return { type: null, message: car };
  };

  module.exports = { findAll };