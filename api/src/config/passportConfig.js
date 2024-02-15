const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../db.js");
const { Role } = require("../db.js");
require("dotenv").config();

const { GOOGLE_CLIENT_ID, GOOGLE_SECRET_CLIENT } = process.env;

//Local

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET_CLIENT,
      // Local
      // callbackURL: "http://localhost:3001/user/auth/google/callback",
      // Deploy
     callbackURL: "https://fakestore-hiqs.onrender.com/user/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile.emails[0].value);
      try {
        let user = await User.findOne({
          where: { googleId: profile.id },
        });

        if (!user) {
          if (profile.emails[0].value === process.env.EMAIL_ROLE) {
            const rol = await Role.findOne({ where: { name: "admin" } });
            const newUser = await User.create({
              googleId: profile.id,
              email: profile.emails[0].value,
            });
            await newUser.addRole(rol);
          }else{
            const rol = await Role.findOne({ where: { name: "user" } });
            const newUser = await User.create({
              googleId: profile.id,
              email: profile.emails[0].value,
            });
            
            await newUser.addRole(rol)
          }
        }

        return done(null, user);
      } catch (error) {
        console.log(error);
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
