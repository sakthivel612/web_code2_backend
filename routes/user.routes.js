const router = require("express").Router();
const { UpdateUser, getUserDetails } = require("../controller/user.controller");
const { verifyToken } = require("../middleware/auth.middleware");

router.put("/update", [verifyToken], UpdateUser);
router.get("/get", [verifyToken], getUserDetails);

module.exports = router;
