const poimodel = (sequelize, DataTypes) => {
    const Points = sequelize.define('Points', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      raio: DataTypes.INTEGER,
      latitude: DataTypes.DECIMAL,      
      longitude: DataTypes.DECIMAL,
    }, { timestamps: false });
  
    return Points;
  };
  
  module.exports = poimodel;