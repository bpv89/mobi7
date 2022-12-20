const express = require('express');
const searchController = require('../controllers/searchController');



const router = express.Router();

router.get('/', searchController.findAll);
router.get('/date', searchController.findByDate);
router.get('/plate', searchController.findByPlate);
router.get('/allplate', searchController.findAllByPlate);


module.exports = router;