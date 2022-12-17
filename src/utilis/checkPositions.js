
const checkPosition = (latCar, longCar, latPoint, longPoint, raio) => {
    const distToCenter = Math.sqrt(Math.pow(((latCar - latPoint)*111100),2)+Math.pow(((longCar-longPoint)*111100),2));
    // console.log(distToCenter);
    return distToCenter < raio 
}

const checkPoint = (car, points ) => {
    const positions = [];
    points.map((point) => {
    const inPosition = checkPosition(car.latitude, car.longitude, point.latitude, point.longitude, point.raio);
    if (inPosition) {
        positions.push({ pointId: point.id , vehiclePosId: car.id, carId: car.carId }) 
    } 
    });

    return positions;

};

module.exports = checkPoint;