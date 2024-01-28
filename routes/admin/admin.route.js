const express = require("express");
const router = express.Router();

const adminController = require("../../controllers/admin/admin.controller");
const adminAuthAndAuthorization = require("../../middlewares/admin.auth");

router.post(
  "/add",
  adminAuthAndAuthorization.authorization,
  adminController.addAdmin
);
router.get(
  "/get",
  adminAuthAndAuthorization.authorization,
  adminController.getAllAdmin
);
router.patch("/:id", adminController.updateAdmin);
router.delete(
  "/:id",
  adminAuthAndAuthorization.authorization,
  adminController.deleteAdmin
);

module.exports = router;
