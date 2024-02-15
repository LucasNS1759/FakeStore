const { Role, User } = require("../db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY_JWT } = process.env;


const verifyRole = async (req, res, next) => {
  const {userId}= req.body
  console.log(userId)
  const user = await User.findByPk(userId)
  console.log("middleware",userId)
  console.log(user.token)
  
  

  if (user) {
    try {
      const decodedToken = jwt.verify(user.token, SECRET_KEY_JWT);

      if (decodedToken) {
        const user = await User.findByPk(decodedToken.userId, {
          include: [{ model: Role }],
        });
       
        if (user.dataValues.Roles[0].id === 3) {
     
          req.userLoginId = decodedToken.userId;
          next();
        } else {
          res.status(403).json({ error: "debe resitrarse primero" });
          return;
        }
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  } else {
    res.status(403).json({ error: "Sesion expirada",message: "debe loguearse de nuevo" });
  }
};

module.exports = verifyRole;
