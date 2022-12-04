const express = require('express');
const carRoutes = require('./routes/carRoutes');
const vehiclesPosRoute = require('./routes/vehiclesPosRoute');
const pointRoute = require('./routes/pointRoutes');
const OnPositionRoute = require('./routes/onPositionRoute');
const timeRoute = require('./routes/timeRoute');


const app = express();


app.use(express.json());
app.use('/cars', carRoutes);
app.use('/vehiclespos', vehiclesPosRoute);
app.use('/points', pointRoute);
app.use('/onposition', OnPositionRoute);
app.use('/time', timeRoute);

module.exports = app;