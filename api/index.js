const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const controllerGetProducts = require("./src/controllers/controllerGetProductsApi.js");
const createRoles = require("./src/controllers/controllerCreateRoles.js");

conn.sync({ alter: true }).then(async () => {
  console.log("estoy conectado a " + conn.getDatabaseName());
  controllerGetProducts();
  createRoles();
  server.listen(3001, () => {
    console.log("escuchando puerto 3001");
  });
});
