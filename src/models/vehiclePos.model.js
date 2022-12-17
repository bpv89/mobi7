module.exports = (sequelize, DataTypes) => {
    const VehiclePos = sequelize.define('VehiclePos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      carId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
      },
      dataPosicao: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      velocidade: {
        type: DataTypes.INTEGER,
      },
      latitude: {
        type: DataTypes.DECIMAL(10,8),
      },
      longitude: {
        type: DataTypes.DECIMAL(10,8),
      },
      ignicao: {
        type: DataTypes.BOOLEAN,
      }

    },
    {
      tableName: 'VehiclesPos',
      timestamps: false,
      underscored: true,
    });

    VehiclePos.associate = (models) => {
        VehiclePos.belongsTo(models.Cars, {
          foreignKey: 'carId',
          as: 'car'
        });
      }

    
    return VehiclePos;
    }
  
