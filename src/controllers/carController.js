const carService = require('../services/carService');

const findAll = async (_req, res) => {
    try {
        const {type, message} = await carService.findAll();
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const insertNew = async (req, res) => {
    try {
        const {type, message} = await carService.insertNew(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};


module.exports = { findAll, insertNew };