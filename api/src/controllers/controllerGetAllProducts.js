const { Op } = require("sequelize");
const { Products, Categories } = require("../db.js");

const controllerGetAllProducts = async (query) => {
  const {
    pagina = 0,
    tamañoDePagina = 8,
    categoryRef,
    price,
    minPrice,
    maxPrice,
    title,
    orden,
    tipoDeOrden,
  } = query;

  const offset = +pagina * +tamañoDePagina;
  const limit = +tamañoDePagina;

  const querys = {
    offset,
    limit,
    where: {},
    order: [[orden, tipoDeOrden]],
    include: [{ model: Categories, as: "categoryRef" }],
  };

  if (!orden && !tipoDeOrden) {
    delete querys.order;
  }
  if (price && minPrice && maxPrice) {
    querys.where.price = { [Op.between]: [minPrice, maxPrice] };
  }
  if (title) {
    querys.where.title = { [Op.iLike]: `%${title}%` };
  }
  if (categoryRef) {
    querys.include.push({
      model: Categories,
      as: "categoryRef",
      where: {
        name: categoryRef, // Filtrar por el nombre de la categoría
      },
    });
  }
  if (categoryRef && price && minPrice && maxPrice) {
    querys.include.push({
      model: Categories,
      as: "categoryRef",
      where: {
        name: categoryRef, // Filtrar por el nombre de la categoría
      },
    });
    querys.where.price = { [Op.between]: [minPrice, maxPrice] };
  }

  const response = await Products.findAndCountAll(querys);

  return {
    count: response.count,
    totalDePaginas: Math.ceil(response.count / tamañoDePagina) - 1,
    paginaActual: pagina ? parseInt(pagina) : pagina,
    paginaAnterior: pagina <= 0 ? null : parseInt(pagina) - 1,
    siguientePagina:
      pagina >= Math.ceil(response.count / tamañoDePagina) - 1
        ? null
        : parseInt(pagina) + 1,
    tamañoDePagina: tamañoDePagina,
    data: response.rows,
  };
};

module.exports = controllerGetAllProducts;
