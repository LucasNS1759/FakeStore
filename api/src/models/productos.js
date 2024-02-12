const { DataTypes } = require("sequelize");

const Productos = (sequelize) => {
  sequelize.define(
    "products",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
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

      description: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
   
      image: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      rating: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    { timestamps: false }
  );
};

module.exports = Productos;
