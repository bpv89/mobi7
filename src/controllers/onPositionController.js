const OnPositionService = require('../services/onPositionService');

const findAll = async (_req, res) => {
    try {
        const {message} = await OnPositionService.findAll();
        res.status(type).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};



module.exports = { findAll };