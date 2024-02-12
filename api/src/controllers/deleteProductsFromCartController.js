const { User, CarritoDeCompras } = require("../db.js");

const deleteProductsFromCartController = async (userLoginId, itemId) => {
  try {
    const user = await User.findByPk(userLoginId, {
      include: [{ model: CarritoDeCompras }],
    });

    // Encuentra el elemento correspondiente al itemId
    const itemToDelete = user.carritoDeCompras.find(item => item.id === itemId);

    if (!itemToDelete) {
      throw new Error('No se encontró el elemento en el carrito de compras.');
    }

    // Elimina el elemento de la base de datos
    await itemToDelete.destroy();

    return { message: "Elemento eliminado del carrito de compras." };
  } catch (error) {
    return error;
  }
};

module.exports = deleteProductsFromCartController;
