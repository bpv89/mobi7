const express = require('express');
const timeController = require('../controllers/timeController');
const validateDate = require('../middlewares/dateValidation');


const router = express.Router();

router.get('/', timeController.findAll);
router.get('/date', validateDate, timeController.findByDate);
router.get('/plate', timeController.findByPlate);


module.exports = router;