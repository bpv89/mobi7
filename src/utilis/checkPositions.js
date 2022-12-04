const { checkPosition } = require('../services/checkposition');

const checkPoint = (car, points ) => {
    const positions = [];
    points.map((point) => {
    const inPosition = checkPosition(car.latitude, car.longitude, point.latitude, point.longitude, point.raio);
    inPosition ? 
    positions.push({ point_id: point.id , vehicle_id: car.id, car_id: car.carId }) 
    : null;
    });

    return positions;

};

module.exports = checkPoint;