const express = require('express');
const carController = require('../controllers/carController');
const plateValidade = require('../middlewares/plateValidation');


const router = express.Router();

router.get('/', carController.findAll);
router.post('/',plateValidade, carController.insertNew)


module.exports = router;