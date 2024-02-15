const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require("../db.js");
require("dotenv").config();
const { SECRET_KEY_JWT } = process.env;
const tokenExpiration = 24 * 60 * 60;

const googleCallback = (req, res, next) => {
  passport.authenticate("google", async (err, user) => {
    if (err) return next(err);
   ;
    // Genera un token JWT si el usuario existe en la base de datos
    if (user.googleId) {
      const token = jwt.sign({ userId: user.id }, SECRET_KEY_JWT, {
        expiresIn: tokenExpiration,
      });

      // Almacena el token en una cookie para modo local
      // res.cookie("Google_Login_Token", token, {
      //   httpOnly: true,
      //   SameSite: "None",
      //   maxAge: tokenExpiration * 1000,
      // });

      // return res.redirect(`http://localhost:5173/logueado`);

      // Manejo de logica para iniciar sesion en delploy por limitaciones de cookie en prueba gratuita de render

      const usuario = await User.findByPk(user.id);
      console.log(usuario)
      usuario.token = token;
      await usuario.save();

      // return res.redirect(
      //   `http://localhost:5173/logueado?userId=${usuario.id}`
      // );

      return res.redirect(
        `https://fake-store-gilt.vercel.app/logueado?userId=${usuario.id}`
      );
    }
  })(req, res, next);
};

module.exports = { googleCallback };
