const { User, CarritoDeCompras } = require("../db.js");

const controllerAmountProduct = async (amount, userLoginId, itemId) => {
  try {
    console.log(userLoginId);
    const user = await User.findByPk(userLoginId, {
      include: [{ model: CarritoDeCompras }],
    });
    const item = user.carritoDeCompras.find((product) => product.id === itemId);
    console.log(item)
    if (amount == "-") {
      if (item.amount == 1) {
        await item.destroy();
      }
      item.amount -= 1;
      await item.save();
    } else {
      item.amount += 1;
      await item.save();
    }

    return { message: "ok" };
  } catch (error) {
    console.log(error);
  }
};

module.exports = controllerAmountProduct;
