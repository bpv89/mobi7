module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      placa: {
        type: DataTypes.STRING,
      }
    },
    {
      tableName: 'Cars',
      timestamps: false,
    });

    Cars.associate = (models) => {
        Cars.hasMany(models.VehiclePos, {
            foreingKey: 'id',
            as: 'position'
        });
    }
  
    return Cars;
  }