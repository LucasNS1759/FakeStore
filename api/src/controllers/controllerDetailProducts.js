const { Products, Categories } = require("../db.js");

const controllerDetailProducts = async (id) => {
  const response = await Products.findByPk(id, {
    include: [{ model: Categories, as: "categoryRef" }],
  });
  return response;
};

module.exports = controllerDetailProducts;
