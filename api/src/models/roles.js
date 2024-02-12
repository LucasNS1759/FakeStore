const { DataTypes } = require("sequelize");

const Role = (sequelize) => {
  sequelize.define(
    "Role",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    { timestamps: false }
  );
};

module.exports = Role;
