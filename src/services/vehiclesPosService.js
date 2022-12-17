
const { Cars, VehiclePos } = require('../models');

  const findAll = async () => {
    const car = await VehiclePos.findAll();
    return { type: null, message: car };
  };

  const insertNew = async (position) => {
    const { placa, dataPosicao, velocidade, latitude, longitude, ignicao } = position;
    const  [vehicle] = await Cars.findAll({ where: { placa }});
    const carId =vehicle.dataValues.id;
    const [pos, created] = await VehiclePos.findOrCreate({ where: { dataPosicao },
      defaults: { carId, velocidade, latitude, longitude, ignicao  }, raw: true});    
    const { id } = pos;
    if (created) {
      return { type: null, message: `New car position inserted with plate ${placa} and id ${id}` };
      };
    return { type: null, message: `Car with plate ${placa} alredy registered on that date` };
    };

  module.exports = { findAll, insertNew };