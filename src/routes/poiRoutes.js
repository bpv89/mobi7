const express = require('express');
const poicontroller = require('../controllers/poiController');


const router = express.Router();

router.get('/', poicontroller.poiTime);

module.exports = router;