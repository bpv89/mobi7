const { checkPosition } = require('../services/checkposition');

const checkPoint = (car, points ) => {
    const positions = [];
    points.map((point) => {
    const inPosition = checkPosition(car.latitude, car.longitude, point.latitude, point.longitude, point.raio);
    if (inPosition) {
        positions.push({ point_id: point.id , vehicle_id: car.id, car_id: car.carId }) 
    } 
    });

    return positions;

};

module.exports = checkPoint;