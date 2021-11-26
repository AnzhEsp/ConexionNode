const express = require("express");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // Paths
    this.producPath = "/productos";

    // Conectar a la base de datos
    this.conectarBd();
    // middlewares
    this.middlewares();

    // rutas de mi app
    this.routes();
  }
  async conectarBd() {
    await dbConnection();
  }
  middlewares() {
    // lectura y parseo del body
    this.app.use(express.json());
    // directorio publico
    this.app.use(express.static("public"));
  }
  routes() {
    this.app.use(this.producPath, require("../routes/user"));
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log("servidor en el puerto", this.port);
    });
  }
}
module.exports = Server;
