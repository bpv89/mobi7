
const checkPosition = (latCar, longCar, latPoint, longPoint, raio) => {
    const distToCenter = Math.sqrt(Math.pow(((latCar - latPoint)*111100),2)+Math.pow(((longCar-longPoint)*111100),2));
    // console.log(distToCenter);
    if (distToCenter < raio) return true;
}

const checkPoint = (car, points ) => {
    const positions = [];
    points.map((point) => {
        const inPosition = checkPosition(car.latitude, car.longitude, point.latitude, point.longitude, point.raio);
        if (inPosition) {
        const obj = { point: point.id, pointName: point.nome , vehiclePosId: car.id, carId: car.carId, date: car.dataPosicao };
        // return obj;
        positions.push(obj); 
    } 
    });
    positions.sort((a,b) => {
        if (a.point === b.point) {
            return a.carId - b.carId;        
        }
        return a.point > b.city ? 1 : -1;
    });
    const filter = positions.filter((e) => e);
    // console.log(filter);

    return filter;

};

module.exports = checkPoint;