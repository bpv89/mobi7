const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM mobi_db.Cars',
        );
        return result;
      };

const insertNew = async (plate) => {
  const [{ insertId }] = await connection.execute(
      'INSERT INTO mobi_db.Cars (placa) VALUES (?)',
      [plate.plate]
      );
      return insertId;
          };

const findPlate = async (plate) => {
  const [result] = await connection.execute(
      `SELECT * FROM mobi_db.Cars
      WHERE placa = ?`,[plate.placa]
      );
  if (result.length > 0) return result[0].id
  return null
              };


module.exports = { findAll, insertNew,findPlate };