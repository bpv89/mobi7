const searchService = require('../services/searchService');

const findAll = async (req, res) => {
    try {
        const {type, message} = await searchService.findAll(req.body);
        console.log(message);
        res.status(type).json({ message });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByDate = async (req, res) => {
    try {
        const {type, message} = await searchService.findByDate(req.body);
        res.status(type).json({ message });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByPlate = async (req, res) => {
    try {
        const {type, message} = await searchService.findByPlate(req.body);
        res.status(type).json({ message });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findAllByPlate = async (req, res) => {
    try {
        const {type, message} = await searchService.findAllByPlate(req.body);
        res.status(type).json({ message });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findByDatePlate = async (req, res) => {
    try {
        const {type, message} = await searchService.findByDatePlate(req.body);
        res.status(type).json({ message });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const findAllByDatePlate = async (req, res) => {
    try {
        const {type, message} = await searchService.findAllByDatePlate(req.body);
        res.status(type).json({ message });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

module.exports = { findAll, findByDate, findByPlate, findAllByPlate, findAllByDatePlate, findByDatePlate };