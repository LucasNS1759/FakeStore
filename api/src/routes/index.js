const express = require("express");
const productsRoutes = require("./productsRoutes");
const paymentRoutes = require("./paymentRoutes");
const userRoutes = require("./userRoutes");
const shoppingCartRoutes = require("./shoppingCartRoutes");
const router = express()



router.use("/products", productsRoutes)
router.use("/payment",paymentRoutes)
router.use("/user",userRoutes)
router.use("/shoppingCart",shoppingCartRoutes)


module.exports = router