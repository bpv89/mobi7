const poiService = require('../services/poiService');

const findAll = async (_req, res) => {
    try {
        const {type, message} = await poiService.findAll();
        res.status(200).json(message);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: "Ocorreu um erro"});
    }
};

module.exports = { findAll };