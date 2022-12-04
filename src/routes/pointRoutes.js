const express = require('express');
const pointController = require('../controllers/pointController');


const router = express.Router();

router.get('/', pointController.findAll);
router.post('/', pointController.insertNew);


module.exports = router;