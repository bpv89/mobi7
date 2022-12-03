const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        'SELECT * FROM mobi_db.Cars',
        );
        return result;
      };

module.exports = { findAll };