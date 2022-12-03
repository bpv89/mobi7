const express = require('express');
const poiRoutes = require('./routes/poiRoutes');


const app = express();


app.use(express.json());
app.use('/poi', poiRoutes);


module.exports = app;