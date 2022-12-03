const vehicles = (sequelize, DataTypes) => {
    const Vehicles = sequelize.define('Vehicles', {      
        data_posicao: DataTypes.DATE,
        velocidade: DataTypes.INTEGER,        
        latitude: DataTypes.DECIMAL,       
        longitude: DataTypes.DECIMAL,
        ignicao: DataTypes.BOOLEAN,
        onPosition: DataTypes.INTEGER,
        carId: { type: DataTypes.INTEGER, foreignKey: true },
    }, { timestamps: false });
    
    return Vehicles;
  };
  
  module.exports = vehicles;