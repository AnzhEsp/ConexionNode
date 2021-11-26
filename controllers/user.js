const { response, request } = require("express");

const getUsuarios = async (req = request, res = response) => {
  res.json({ msg: "Esto es una peticion get" });
};
module.exports = {
  getUsuarios,
};
