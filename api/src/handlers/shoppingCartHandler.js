const addToCartController = require("../controllers/addToCartController");
const controllerAmountProduct = require("../controllers/controllerAmountProduct");
const deleteProductsFromCartController = require("../controllers/deleteProductsFromCartController");
const getProductsFromCartController = require("../controllers/getProductsFromCartController");

const addToCartHandler = async (req, res) => {
  const userLoginId = req.userLoginId;
  const { productId, title, price, image, amount } = req.body;

  try {
    const response = await addToCartController(
      productId,
      title,
      price,
      image,
      amount,
      userLoginId
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const getProductsFromCartHandler = async (req, res) => {
  const userLoginId = req.userLoginId;

  try {
    const response = await getProductsFromCartController(userLoginId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteProductFromCartHandler = async (req, res) => {
  const { itemId } = req.body;
  const userLoginId = req.userLoginId;

  try {
    const response = await deleteProductsFromCartController(
      userLoginId,
      itemId
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const changeAmountProductHandler = async (req,res) =>{
  const { amount,itemId } = req.body;
  const userLoginId = req.userLoginId;
console.log(amount)
 try {
  const response = await controllerAmountProduct(amount,userLoginId,itemId)
  res.status(200).json(response)
 } catch (error) {
  res.status(400).json({error: error})
 }
}

module.exports = {
  addToCartHandler,
  getProductsFromCartHandler,
  deleteProductFromCartHandler,
  changeAmountProductHandler
};
