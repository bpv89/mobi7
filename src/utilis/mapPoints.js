const convertTime = require('./convertTime');

const mapPoints = (cars) => {
    const vehicle = [];
    const carTimeByPoint = [];
    cars.map((car, index)=> {      
      if (index === 0 || car.Ponto !== cars[index - 1].Ponto) {
        vehicle.push({...car, limit: 'inferior'})
      }
      else if (index === cars.length -1 || car.Ponto !== cars[index + 1].Ponto ) {
        vehicle.push({...car, limit: 'superior'})
      }
      else if(car.id !== cars[index - 1].id + 1 || car.carId !== cars[index - 1].carId) {
        vehicle.push({...car, limit: 'inferior'})       
      }
      else if(car.id !== cars[index + 1].id - 1 || car.carId !== cars[index + 1].carId) {
        vehicle.push({...car, limit: 'superior'})       
      }
    });
    vehicle.map((car, index) => {
      if (car.limit === 'inferior' && vehicle[index + 1].limit === 'superior'){
        const dataFinal = vehicle[index + 1].data_posicao;
        const { carId, placa, PontoId, Ponto, data_posicao } = car;
        const timeExpend = convertTime((dataFinal - data_posicao))
        carTimeByPoint
        .push({ carId, placa, PontoId, Ponto, dataInicial: data_posicao, dataFinal:dataFinal, timeExpend: timeExpend }) 
      }
    });
    return carTimeByPoint;
}
module.exports = mapPoints;