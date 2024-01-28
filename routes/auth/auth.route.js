const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/adminAuth.controller");

router.post("/", authController.auth);
router.post("/add", authController.addAuth);

module.exports = router;
