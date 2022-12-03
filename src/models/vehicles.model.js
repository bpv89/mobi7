const vehicles = (sequelize, DataTypes) => {
    const Vehicles = sequelize.define('Vehicles', {
        placa: DataTypes.STRING,
        data_posicao: DataTypes.DATE,
        velocidade: DataTypes.INTEGER,        
        latitude: DataTypes.DECIMAL,       
        longitude: DataTypes.DECIMAL,
        ignicao: DataTypes.BOOLEAN,
        onPosition: DataTypes.INTEGER,
    }, { timestamps: false });
    return Vehicles;
  };
  
  module.exports = vehicles;