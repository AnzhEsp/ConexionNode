const bcryptjs = require("bcryptjs");

const { response } = require("express");
const { generarJWT } = require("../helpers/generar-jwt");
const Usuario = require("../models/usuario");
const login = async (req, res = response) => {
  const { email, pass } = req.body;

  try {
    // verificar si el email existe
    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
      return res.status(400).json({
        msg: "Error in the pass or email-email",
      });
    }
    // si el usuario esta activo
    if (!usuario.state) {
      return res.status(400).json({
        msg: "Error in the pass or email-state=false",
      });
    }
    // verificar la contraseña
    const token = await generarJWT(usuario.id);
    const validPass = bcryptjs.compareSync(pass, usuario.pass);
    if (!validPass) {
      return res.status(400).json({
        msg: "Error in the pass or email-pass",
      });
    }
    // generar el JWT
    res.json({
      usuario,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "consult the administrator",
    });
  }
};

module.exports = {
  login,
};
