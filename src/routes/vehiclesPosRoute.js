const express = require('express');
const vehiclesPosController = require('../controllers/vehiclesPosController');


const router = express.Router();

router.get('/', vehiclesPosController.findAll);
router.post('/', vehiclesPosController.insertNew);


module.exports = router;