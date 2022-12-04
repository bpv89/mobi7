const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM mobi_db.Vehicles',
        );
        return result;
      };

const insertNew = async (position) => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO mobi_db.Vehicles (carId, data_posicao, velocidade, latitude, longitude, ignicao) VALUES (?,?,?,?,?,?)',
        [position.carId, position.data_posicao, position.velocidade, position.latitude, position.longitude, position.ignicao ]
        );
    return insertId;
    }

module.exports = { findAll, insertNew };