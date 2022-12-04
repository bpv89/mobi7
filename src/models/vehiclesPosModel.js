const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM mobi_db.Vehicles',
        );
        return result;
      };

module.exports = { findAll };