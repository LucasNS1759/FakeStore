const controllerFindAUserByPk = require("../controllers/controllerFindAUserByPk");
const controllerFindAllUsers = require("../controllers/controllerFindAllUsers");

const findAllUsersHandler = async (req, res) => {
  try {
    const response = await controllerFindAllUsers();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

const findUserByIdHandler = async (req, res) => {
   const userLoginId = req.userLoginId;
   console.log(userLoginId)

  try {
    const response = await controllerFindAUserByPk(userLoginId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { findAllUsersHandler, findUserByIdHandler };
