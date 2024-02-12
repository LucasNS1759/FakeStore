const { User, Role } = require("../db.js");

const controllerFindAllUsers = async () => {
try {
    const response = await User.findAll({ include: [{ model: Role }] });
    console.log(response )
    return response;
} catch (error) {
    console.log(error)
}
};

module.exports = controllerFindAllUsers;
