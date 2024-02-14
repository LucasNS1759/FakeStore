const { Router } = require("express");
const { addToCartHandler,getProductsFromCartHandler, deleteProductFromCartHandler,changeAmountProductHandler } = require("../handlers/shoppingCartHandler");
const verifyUser  = require("../middleWare/verifyUserRole");

const shoppingCartRoutes = Router();

shoppingCartRoutes.post("/addProduct", verifyUser, addToCartHandler);
shoppingCartRoutes.get("/getProductsFromCart", verifyUser, getProductsFromCartHandler);
shoppingCartRoutes.delete("/deleteProductFromCart", verifyUser, deleteProductFromCartHandler);
shoppingCartRoutes.put("/changeAmount", verifyUser, changeAmountProductHandler);



module.exports = shoppingCartRoutes;
