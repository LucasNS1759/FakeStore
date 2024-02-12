const { Role } = require("../db.js");

const createRoles = async () => {
  const count = await Role.count();

  if (count > 0) return;
  const roles = ["admin", "manager", "user", "guest"];
  try {
    roles.forEach(async (rol) => {
      await Role.create({ name: rol });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = createRoles;
