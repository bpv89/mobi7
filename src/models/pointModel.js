const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM mobi_db.Points',
        );
        return result;
      };

const insertNew = async (point) => {
    const [{ insertId }] = await connection.execute(
        'INSERT INTO mobi_db.Points (nome, raio, latitude, longitude) VALUES (?,?,?,?)',
        [point.nome, point.raio, point.latitude, point.longitude]
        );
        return insertId;
        };

module.exports = { findAll, insertNew };