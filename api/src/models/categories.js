const { DataTypes } = require("sequelize");

const Categories = (sequelize) => {
  sequelize.define(
    "categories",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = Categories;
