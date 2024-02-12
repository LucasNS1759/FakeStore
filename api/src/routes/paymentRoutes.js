const router = require("express");
const { mercadoPagoHandlerCheckOut,mercadoPagoHandlerSucces,mercadoPagoHandlerFailure,mercadoPagoHandlerPending} = require("../handlers/mercadoPagoHandler");

const paymentRoutes = router()
const verifyRole = require("../middleWare/verifyUserRole.js");

paymentRoutes.post("/checkOut",verifyRole, mercadoPagoHandlerCheckOut)
paymentRoutes.get("/success", mercadoPagoHandlerSucces)
paymentRoutes.get("/failure", mercadoPagoHandlerFailure)
paymentRoutes.get("/pending", mercadoPagoHandlerPending)


module.exports = paymentRoutes;