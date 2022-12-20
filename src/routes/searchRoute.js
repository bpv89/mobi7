const express = require('express');
const searchController = require('../controllers/searchController');



const router = express.Router();

router.get('/', searchController.findAll);
router.get('/date', searchController.findByDate);
router.get('/plate', searchController.findByPlate);
router.get('/alldateplate', searchController.findAllByDatePlate);
router.get('/allplate', searchController.findAllByPlate);
router.get('/dateplate', searchController.findByDatePlate);


module.exports = router;