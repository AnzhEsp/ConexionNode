const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("base de datos online");
  } catch (error) {
    console.log(error);
    throw new Error("error en la conexion");
  }
};

module.exports = {
  dbConnection,
};
