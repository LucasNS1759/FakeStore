const express = require("express");
const {
  handlerGetProductsApi,
  handlerPostProducts,
  handlerPutProducts,
  handlerDeleteProducts,
  handlerGetAllProducts,
  handleDetailtProducts
} = require("../handlers/productsHandler");
const productsRoutes = express();

productsRoutes.get("/saveApiData", handlerGetProductsApi);
productsRoutes.get("/?", handlerGetAllProducts);
productsRoutes.get("/detail/:id", handleDetailtProducts);
productsRoutes.post("/", handlerPostProducts);
productsRoutes.put("/", handlerPutProducts);
productsRoutes.delete("/", handlerDeleteProducts);

module.exports = productsRoutes;
