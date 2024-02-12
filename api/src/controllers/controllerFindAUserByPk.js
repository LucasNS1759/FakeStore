const { User, CarritoDeCompras } = require("../db.js");

const controllerFindAUserByPk = async (id) => {
  const user = await User.findByPk(id, {
    include: [{ model: CarritoDeCompras }],
  });

  const carrito = user.carritoDeCompras.map((producto) => {
    return {
      id: producto.id,
      title: producto.title,
      currency_id: "ARS",
      picture_url: producto.image,
      category_id: "art",
      quantity: producto.amount,
      unit_price: parseInt(producto.price),
    };
  });
  
  return {
    user: {
      id: user.id,
      googleId: user.googleId,
      email: user.email,
      codigoPostal: user.codigoPostal,
      pais: user.pais,
      provincia: user.provincia,
      ciudad: user.ciudad,
      nuemeroDeTelefono: user.nuemeroDeTelefono,
    },
    carritoDeCompras: carrito,
  };
};

module.exports = controllerFindAUserByPk;
