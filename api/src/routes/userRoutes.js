const passport = require("passport");
require("../config/passportConfig.js");
const authController = require("../controllers/controllerPassport.js");

const {findAllUsersHandler,findUserByIdHandler} = require("../handlers/usersHandlerFindAll.js")


const Router = require("express");
const verifyRole = require("../middleWare/verifyUserRole.js");
const userRoutes = Router();

userRoutes.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
userRoutes.get("/auth/google/callback", authController.googleCallback);
userRoutes.get("/",verifyRole,findAllUsersHandler)
userRoutes.get("/findUser",verifyRole,findUserByIdHandler)


module.exports = userRoutes;
