const timeService = require('../services/timeService');

const findAll = async (_req, res) => {
    try {
        const {type, message} = await timeService.findAll();
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByDate = async (req, res) => {
    try {
        const {type, message} = await timeService.findByDate(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByPlate = async (req, res) => {
    try {
        const {type, message} = await timeService.findByPlate(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

module.exports = { findAll, findByDate, findByPlate };