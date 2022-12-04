const OnPositionModel = require('../models/onPositionModel');

const findAll = async () => {
    const car = await OnPositionModel.findAll();
    return { type: null, message: car };
  };

  module.exports = { findAll };