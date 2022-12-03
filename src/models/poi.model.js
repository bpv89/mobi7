const poimodel = (sequelize, DataTypes) => {
    const Points = sequelize.define('Points', {
      nome: DataTypes.STRING,
      raio: DataTypes.INTEGER,
      latitude: DataTypes.DECIMAL,      
      longitude: DataTypes.DECIMAL,
    }, { timestamps: false });
  
    return Points;
  };
  
  module.exports = poimodel;