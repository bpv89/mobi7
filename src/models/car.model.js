module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      placa: DataTypes.STRING,
    },
    {
      timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
      underscored: true,
    });
  
   
  
    return Cars;
  };