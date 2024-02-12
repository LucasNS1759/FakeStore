const { CarritoDeCompras, User } = require("../db.js");

const getProductsFromCartController = async (userLoginId) => {
  const items = await User.findByPk(userLoginId, {
    include: [{ model: CarritoDeCompras }],
  });
  let total = 0;
  items.dataValues.carritoDeCompras.forEach((p) => {
    if (p.dataValues.amount > 1) {
      total += parseFloat(p.dataValues.price) * p.dataValues.amount;
    } else {
      total += parseFloat(p.dataValues.price);
    }
  });

  return {
    items: items.dataValues.carritoDeCompras,
    total,
    
  };
};

module.exports = getProductsFromCartController;
