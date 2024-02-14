const passport = require("passport");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { SECRET_KEY_JWT } = process.env;
const tokenExpiration = 24 * 60 * 60;

const googleCallback = (req, res, next) => {
  passport.authenticate("google", async (err, user) => {
    if (err) return next(err);
 console.log(user)
    // Genera un token JWT si el usuario existe en la base de datos
    if (user.googleId) {
      const token = jwt.sign({ userId: user.id }, SECRET_KEY_JWT, {
        expiresIn: tokenExpiration,
      });

      // Almacena el token en una cookie
      localStorage.setItem("Google_Login_Token", token);

      return res.redirect(`https://fake-store-gilt.vercel.app//logueado`);
    }
  })(req, res, next);
};

module.exports = { googleCallback };
