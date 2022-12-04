const express = require('express');
const OnPositionController = require('../controllers/onPositionController');


const router = express.Router();

router.get('/', OnPositionController.findAll);


module.exports = router;