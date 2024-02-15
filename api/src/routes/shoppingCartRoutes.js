const { Router } = require("express");
const { addToCartHandler,getProductsFromCartHandler, deleteProductFromCartHandler,changeAmountProductHandler } = require("../handlers/shoppingCartHandler");
const verifyUser  = require("../middleWare/verifyUserRole");
const verifyUserDeploy  = require("../middleWare/verifyUserRoleLocal");


const shoppingCartRoutes = Router();

//Local
// shoppingCartRoutes.post("/addProduct", verifyUser, addToCartHandler);
// shoppingCartRoutes.get("/getProductsFromCart", verifyUser, getProductsFromCartHandler);
// shoppingCartRoutes.delete("/deleteProductFromCart", verifyUser, deleteProductFromCartHandler);
// shoppingCartRoutes.put("/changeAmount", verifyUser, changeAmountProductHandler);

// Deploy

shoppingCartRoutes.post("/addProduct", verifyUserDeploy, addToCartHandler);
shoppingCartRoutes.post("/getProductsFromCart", verifyUserDeploy, getProductsFromCartHandler);
shoppingCartRoutes.post("/deleteProductFromCart", verifyUserDeploy, deleteProductFromCartHandler);
shoppingCartRoutes.put("/changeAmount", verifyUserDeploy, changeAmountProductHandler);


module.exports = shoppingCartRoutes;
