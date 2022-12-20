const pointService = require('../services/pointService');

const findAll = async (_req, res) => {
    try {
        const {type, message} = await pointService.findAll();
        res.status(type).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

const insertNew = async (req, res) => {
    try {
        const {type, message} = await pointService.insertNew(req.body);
        res.status(type).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};




module.exports = { findAll, insertNew };