const checkPosition = (latCar, longCar, latPoint, longPoint, raio) => {
    const distToCenter = Math.sqrt(Math.pow(((latCar - latPoint)*111100),2)+Math.pow(((longCar-longPoint)*111100),2));
    // console.log(distToCenter);
    return distToCenter < raio 
}

module.exports = { checkPosition };
// console.log(checkPosition(-25.3649141,-51.469891,-25.567427017409,-51.47653336364508,300));
