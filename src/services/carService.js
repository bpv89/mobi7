const { Cars }= require('../models');

const findAll = async () => {
    const car = await Cars.findAll();
    return { type: 200, message: car };
  };

  const insertNew = async (placa) => {
    const [car, created] = await Cars.findOrCreate({ where: { placa }, raw: true });
    const { id } = car;
    console.log(id);
    if (created) {
      return { type: 201, message: `New car inserted with plate ${placa} and id ${id}` };
      };
    return { type: 204, message: `Car with plate ${placa} alredy registered` };

  };

  module.exports = { findAll, insertNew };