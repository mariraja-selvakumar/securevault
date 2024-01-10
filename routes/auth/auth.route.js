const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/auth.controller");

router.post("/", authController.auth);
router.post("/add", authController.addAuth);

module.exports = router;
