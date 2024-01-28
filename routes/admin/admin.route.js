const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin/admin.controller");

router.post("/add", adminController.addAdmin);
router.get("/get", adminController.getAllAdmin);
router.patch("/:id", adminController.updateAdmin);
router.delete("/:id", adminController.deleteAdmin);

module.exports = router;
