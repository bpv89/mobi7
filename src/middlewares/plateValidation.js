const carModel = require('../models/carModel');

const plateValidade = async (req, res, next) => {
    const alredyOn = await carModel.findPlate(req.body);
    if (alredyOn) {
        return res.status(400).json({ message: `Plate ${req.body.plate} alredy registered` })
    }
    next();
}

module.exports = plateValidade;
