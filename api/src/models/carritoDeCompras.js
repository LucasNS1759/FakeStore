const { DataTypes } = require("sequelize");

const CarritoDeCompras = (sequelize) => {
  sequelize.define(
    "carritoDeCompras",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      productId: {
        type: DataTypes.UUID,
        primaryKey: false,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = CarritoDeCompras;
