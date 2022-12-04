const vehiclesPos = require('../services/vehiclesPosService');

const findAll = async (_req, res) => {
    try {
        const {type, message} = await vehiclesPos.findAll();
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const insertNew = async (req, res) => {
    try {
        const {message} = await vehiclesPos.insertNew(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

module.exports = { findAll, insertNew };