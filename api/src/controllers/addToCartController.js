// const { CarritoDeCompras, User } = require("../db.js");

// const addToCartController = async (
//   productId,
//   title,
//   price,
//   image,
//   amount,
//   userLoginId
// ) => {
//   console.log(productId, title, price, image, amount, userLoginId);

//   const newItem = await CarritoDeCompras.create({
//     productId,
//     title,
//     price,
//     image,
//     amount,
//   });
//   const user = await User.findByPk(userLoginId);
//   console.log(user.__proto__);

//   await user.addCarritoDeCompra(newItem);

//   const response = await User.findByPk(userLoginId, {
//     include: [{ model: CarritoDeCompras }],
//   });

//   return response;
// };

// module.exports = addToCartController;

const { CarritoDeCompras, User } = require("../db.js");

const addToCartController = async (
  productId,
  title,
  price,
  image,
  amount,
  userLoginId
) => {
  // Buscar el usuario
  const user = await User.findByPk(userLoginId);

  // Buscar el ítem en el carrito de compras del usuario
  let itemInCart = await CarritoDeCompras.findOne({
    where: { productId },
  });

  if (itemInCart) {
    // Si el ítem ya está en el carrito, incrementar la cantidad
    itemInCart.amount += 1;
    await itemInCart.save();
  } else {
    // Si el ítem no está en el carrito, crear uno nuevo
    const newItem = await CarritoDeCompras.create({
      productId,
      title,
      price,
      image,
      amount,
    });
    const user = await User.findByPk(userLoginId);

    await user.addCarritoDeCompra(newItem);
  }

  // Devolver el usuario con su carrito de compras actualizado
  const updatedUser = await User.findByPk(userLoginId, {
    include: [{ model: CarritoDeCompras }],
  });

  return updatedUser;
};

module.exports = addToCartController;
