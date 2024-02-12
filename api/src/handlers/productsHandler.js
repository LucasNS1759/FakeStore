const controllerDeleteProducts = require("../controllers/controllerDeleteProducts");
const controllerGetProductsApi = require("../controllers/controllerGetProductsApi");
const controllerPostProducts = require("../controllers/controllerPostProducts");
const controllerPutProducts = require("../controllers/controllerPutProducts");
const controllerGetAllProducts = require("../controllers/controllerGetAllProducts");
const controllerDetailProducts = require("../controllers/controllerDetailProducts");

const handlerGetProductsApi = async (req, res) => {
  try {
    const response = await controllerGetProductsApi();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const handlerGetAllProducts = async (req, res) => {
  try {
    const response = await controllerGetAllProducts(req.query);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const handleDetailtProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await controllerDetailProducts(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const handlerPostProducts = async (req, res) => {
  try {
    const response = await controllerPostProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};
const handlerPutProducts = async (req, res) => {
  try {
    const response = await controllerPutProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};
const handlerDeleteProducts = async (req, res) => {
  try {
    const response = await controllerDeleteProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  handlerGetProductsApi,
  handlerPostProducts,
  handlerPutProducts,
  handlerDeleteProducts,
  handlerGetAllProducts,
  handleDetailtProducts,
};
