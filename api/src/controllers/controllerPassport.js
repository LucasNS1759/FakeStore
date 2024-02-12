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
      res.cookie("Google_Login_Token", token, {
        httpOnly: true,
        SameSite: "None",
        maxAge: tokenExpiration * 1000,
      });

      return res.redirect(`http://localhost:5173/logueado`);
    }
  })(req, res, next);
};

module.exports = { googleCallback };
