const express = require('express');
const pointController = require('../controllers/pointController');


const router = express.Router();

router.get('/', pointController.findAll);


module.exports = router;