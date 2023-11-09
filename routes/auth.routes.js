const router = require("express").Router();
const { register, login } = require("../controller/auth.controller");
const {
  ValidateAuthRegister,
  ValidateAuthLogin,
} = require("../middleware/auth.middleware");

router.post("/register", [ValidateAuthRegister], register);
router.post("/login", [ValidateAuthLogin], login);

module.exports = router;
