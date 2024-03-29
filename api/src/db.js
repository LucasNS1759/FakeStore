require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );

// Render
const sequelize = new Sequelize("postgres://fakestore_fkys_user:ZRNj43mX9TM0Q2vr6RF5ZjpZSFS9o5nj@dpg-cn5at4en7f5s738gtosg-a.oregon-postgres.render.com/fakestore_fkys", {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});



const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User } = sequelize.models;
const { Role } = sequelize.models;
const { Products } = sequelize.models;
const { Categories } = sequelize.models;
const { CarritoDeCompras } = sequelize.models;

console.log(User)
console.log(Role)
console.log(Products)
console.log(Categories)
console.log(CarritoDeCompras)




Products.belongsTo(Categories, { as: 'categoryRef' }); // Un producto pertenece a una categoría
Categories.hasMany(Products, { as: 'products' }); // Una categoría puede tener muchos productos

// esto es muchos a muchos
User.belongsToMany(CarritoDeCompras, { through: 'shopping_cart' });
CarritoDeCompras.belongsToMany(User, { through: 'shopping_cart' });

//Relacion roles user
User.belongsToMany(Role, { through: 'UserRole' });
Role.belongsToMany(User, { through: 'UserRole' });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
