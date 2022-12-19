const convertTime = require('./convertTime');

const mapPoints = (cars) => {
    const vehicle = [];
    const carTimeByPoint = [];
    // console.log(cars);
    cars.map((car, index)=> {
      // posição inicial ou mudança de ponto com o veiculo anterior    
      if (index === 0 || car.point !== cars[index - 1].point) {
        vehicle.push({...car, limit: 'inferior'})
      }
      else if (index === cars.length -1 || car.point !== cars[index + 1].point ) {
        vehicle.push({...car, limit: 'superior'})
      }
      else if(car.vehiclePosId !== cars[index - 1].vehiclePosId + 1 || car.carId !== cars[index - 1].carId) {
        vehicle.push({...car, limit: 'inferior'})       
      }
      else if(car.vehiclePosId !== cars[index + 1].vehiclePosId - 1 || car.carId !== cars[index + 1].carId) {
        vehicle.push({...car, limit: 'superior'})       
      }
    });
    // console.log(vehicle);

    vehicle.map((car, index) => {
      if (car.limit === 'inferior' && vehicle[index + 1].limit === 'superior'){
        const dataFinal = vehicle[index + 1].date;
        const { carId, point, pointName, date } = car;
        const timeExpend = convertTime((dataFinal - date))
        carTimeByPoint
          .push({ carId, point, pointName, dataInicial: date, dataFinal:dataFinal, timeExpend: timeExpend }) 
      }
    });
    return carTimeByPoint;
}
module.exports = mapPoints;