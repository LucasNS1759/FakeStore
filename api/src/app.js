const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const passport = require("passport");
const server = express();

// Local
// server.use(
//   cors({
//     origin: "http://localhost:5173", // Asegúrate de que coincida con el origen de tu aplicación
//     credentials: true, // Habilita el envío de cookies con credenciales si es necesario
//   })
// );

// deploy

server.use(
  cors({
    origin: "https://fake-store-gilt.vercel.app", // Asegúrate de que coincida con el origen de tu aplicación
    credentials: true, // Habilita el envío de cookies con credenciales si es necesario
  })
);

server.use(cookieParser());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(helmet());

// Local
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// Deploy
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://fake-store-gilt.vercel.app"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(
  session({
    secret: process.env.GOOGLE_SECRET_CLIENT,
    resave: false,
    saveUninitialized: true,
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use("/", router);

server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
