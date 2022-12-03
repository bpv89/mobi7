module.exports = (sequelize, _DataTypes) => {
    const OnPosition = sequelize.define('OnPosition',
    {},
    {timestamps: false,
        underscored: true },);

        OnPosition.associate = (models) => {
            models.Points.belongsToMany(models.Vehicles, {
                as: 'vehicle',
                through: OnPosition,
                foreingKey: 'pointId',
                otherKey: 'vehicleId'
            });
            models.Vehicles.belongsToMany(models.Points, {
                as: 'point',
                through: OnPosition,
                foreingKey: 'vehicleId',
                otherKey: 'pointId'
            });
        }
        return OnPosition;
};