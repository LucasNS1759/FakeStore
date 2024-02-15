const router = require("express");
const { mercadoPagoHandlerCheckOut,mercadoPagoHandlerSucces,mercadoPagoHandlerFailure,mercadoPagoHandlerPending} = require("../handlers/mercadoPagoHandler");

const paymentRoutes = router()
// Local
const verifyRole = require("../middleWare/verifyUserRole.js");

// Deploy
const verifyUserDeploy  = require("../middleWare/verifyUserRoleLocal");


paymentRoutes.post("/checkOut",verifyUserDeploy, mercadoPagoHandlerCheckOut)
paymentRoutes.get("/success", mercadoPagoHandlerSucces)
paymentRoutes.get("/failure", mercadoPagoHandlerFailure)
paymentRoutes.get("/pending", mercadoPagoHandlerPending)


module.exports = paymentRoutes;