const { Router } = require("express");
const { addToCartHandler,getProductsFromCartHandler, deleteProductFromCartHandler,changeAmountProductHandler } = require("../handlers/shoppingCartHandler");
const verifyUser  = require("../middleWare/verifyUserRole");

const shoppingCartRoutes = Router();

shoppingCartRoutes.post("/addProduct",  addToCartHandler);
shoppingCartRoutes.get("/getProductsFromCart",  getProductsFromCartHandler);
shoppingCartRoutes.delete("/deleteProductFromCart",  deleteProductFromCartHandler);
shoppingCartRoutes.put("/changeAmount",  changeAmountProductHandler);



module.exports = shoppingCartRoutes;
