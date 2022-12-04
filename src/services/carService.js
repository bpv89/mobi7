const carModel = require('../models/carModel');

const findAll = async () => {
    const car = await carModel.findAll();
    return { type: null, message: car };
  };

  const insertNew = async (plate) => {
    const car = await carModel.insertNew(plate);
    return { type: null, message: `New car inserted with plate ${plate.plate} and id ${car}` };
  };

  module.exports = { findAll, insertNew };