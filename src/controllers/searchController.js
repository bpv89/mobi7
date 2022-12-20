const searchService = require('../services/searchService');

const findAll = async (req, res) => {
    try {
        const {type, message} = await searchService.findAll(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByDate = async (req, res) => {
    try {
        const {type, message} = await searchService.findByDate(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByPlate = async (req, res) => {
    try {
        const {type, message} = await searchService.findByPlate(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findAllByPlate = async (req, res) => {
    try {
        const {type, message} = await searchService.findAllByPlate(req.body);
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

module.exports = { findAll, findByDate, findByPlate, findAllByPlate };