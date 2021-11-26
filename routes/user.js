const { Router } = require("express");
const { getUsuarios } = require("../controllers/user");
const router = Router();

router.get("/", getUsuarios);

module.exports = router;
