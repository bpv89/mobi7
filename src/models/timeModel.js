const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute(
        `SELECT 
            Vehicles.id, Vehicles.carId, Cars.placa, Vehicles.data_posicao, Positions.point_id AS PontoId, Points.nome AS Ponto           
        FROM mobi_db.Vehicles AS Vehicles
        INNER JOIN OnPosition AS Positions
        ON Vehicles.id = Positions.vehicle_id
        INNER JOIN Points 
        ON Points.id = Positions.point_id
        INNER JOIN Cars
        ON Cars.id = Vehicles.carId
        ORDER BY Positions.point_id, Vehicles.id
        `,
        );
        return result;
      };

const findByDate = async (date) => {
    
    const [result] = await connection.execute(
        `SELECT 
            Vehicles.id, Vehicles.carId, Cars.placa, Vehicles.data_posicao, Positions.point_id AS PontoId, Points.nome AS Ponto           
        FROM mobi_db.Vehicles AS Vehicles
            INNER JOIN OnPosition AS Positions
            ON Vehicles.id = Positions.vehicle_id
            INNER JOIN Points 
            ON Points.id = Positions.point_id
            INNER JOIN Cars
            ON Cars.id = Vehicles.carId
        WHERE Vehicles.data_posicao LIKE '${date.date}%'
        ORDER BY Positions.point_id, Vehicles.id
        `,
        );
        return result;
      };


const findByPlate = async (plate) => {
    console.log(plate);
    const [result] = await connection.execute(
        `SELECT 
            Vehicles.id, Vehicles.carId, Cars.placa, Vehicles.data_posicao, Positions.point_id AS PontoId, Points.nome AS Ponto           
        FROM mobi_db.Vehicles AS Vehicles
            INNER JOIN OnPosition AS Positions
            ON Vehicles.id = Positions.vehicle_id
            INNER JOIN Points 
            ON Points.id = Positions.point_id
            INNER JOIN Cars
            ON Cars.id = Vehicles.carId
            WHERE Cars.placa LIKE '${plate.plate}%'
        ORDER BY Positions.point_id, Vehicles.id
        `,
        );
        return result;

};

module.exports = { findAll, findByDate, findByPlate };