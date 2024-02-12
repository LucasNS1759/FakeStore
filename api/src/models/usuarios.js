const { DataTypes } = require("sequelize");

const User = (sequelize) => {
   sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      googleId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codigoPostal: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Pais: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      provincia: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ciudad: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      numeroDeTelefono: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    { timestamps: false }
  );
};

module.exports = User
