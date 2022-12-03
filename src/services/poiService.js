const carModel = require('../models/carModel');

const findAll = async () => {
    const car = await carModel.findAll();
    return { type: null, message: car };
  };

  module.exports = { findAll };