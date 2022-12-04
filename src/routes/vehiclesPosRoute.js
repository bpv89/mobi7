const express = require('express');
const vehiclesPosController = require('../controllers/vehiclesPosController');


const router = express.Router();

router.get('/', vehiclesPosController.findAll);


module.exports = router;