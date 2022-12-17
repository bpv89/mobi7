module.exports = (sequelize, DataTypes) => {
    const Points = sequelize.define('Points', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING,
      },
      raio: {
        type: DataTypes.INTEGER,
      },
      latitude: {
        type: DataTypes.DECIMAL(10,8),
      },
      longitude: {
        type: DataTypes.DECIMAL(10,8),
      }
    },
    {
      tableName: 'Points',
      timestamps: false,
      underscored: true,
    });
    
    return Points;
    }
  