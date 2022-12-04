const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM mobi_db.OnPosition',
        );
        return result;
      };

const insertNew = async (position) => {
  const [{ insertId }] = await connection.execute(
      'INSERT INTO mobi_db.OnPosition (car_id, vehicle_id, point_id) VALUES (?,?,?)',
      [position.car_id, position.vehicle_id, position.point_id]
      );

  return insertId;
};

module.exports = { findAll, insertNew };