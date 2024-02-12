const axios = require("axios");
const { Products, Categories } = require("../db.js");

const url = "https://fakestoreapi.com/products/";

const controllerGetProductsApi = async () => {
  const count = await Products.count();

  if (count > 0) {
    return;
  }

  try {
    const response = await axios.get(url);
    if (response.data) {
      await Promise.all(
        response.data.map(async (product) => {
          // Crea el producto en la base de datos
          const newProduct = await Products.create({
            title: product.title,
            price: product.price,
            description: product.description,
            image: product.image,
            rating: product.rating,
            amount: Math.floor(Math.random() * 300) + 1,
          });

          // Encuentra la categoría asociada al producto
          let category = await Categories.findOne({
            where: { name: product.category },
          });

          // Si la categoría no existe, créala
          if (!category) {
            category = await Categories.create({ name: product.category });
          }

          // Asocia la categoría al producto
          let findCategory = await Categories.findOne({
            where: { name: product.category },
          });
       
          await newProduct.setCategoryRef(findCategory);
          await Products.findByPk(newProduct.id, {
            include: [{ model: Categories, as: "categoryRef" }],
          });
        })
      );
      return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = controllerGetProductsApi;
