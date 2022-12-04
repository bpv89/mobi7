const pointModel = require('../models/pointModel');

const findAll = async () => {
    const car = await pointModel.findAll();
    return { type: null, message: car };
  };

  module.exports = { findAll };