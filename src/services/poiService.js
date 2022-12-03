const { Points, Vehicles, OnPoint } = require('../models')


const poiTime = async () => {
    const pois = await Points.findAll();
    const vehicles = await Vehicles.findAll();
    const points = await JSON.parse(JSON.stringify(pois));
    const cars = await JSON.parse(JSON.stringify(vehicles));
 
    // await OnPoint.bulkCreate('OnPoint', obj, {}).then(console.log('ok'));



    // console.log(points, cars);
    return {type: null, message: pois}
};

module.exports = { poiTime }