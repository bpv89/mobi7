const { Points } = require('../models');

const findAll = async () => {
    const car = await Points.findAll();
    return { type: null, message: car };
  };

const insertNew = async (point) => {
  const { nome, raio, latitude, longitude } = point
  const points = await Points.findOrCreate({ where: { nome },
    defaults: { raio, latitude, longitude  }});
  
  return { type: null, message: 'New point inserted' };
  };

  module.exports = { findAll, insertNew };