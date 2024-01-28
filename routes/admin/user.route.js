const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/admin/admin.controller");
const adminAuthAndAuthorization = require("../../middlewares/admin.auth");

router.post(
  "/add",
  adminAuthAndAuthorization.authorization,
  UserController.addUser
);
router.get("/users", UserController.getAllUsers);
router.patch("/:id", UserController.updateUser);
router.delete(
  "/:id",
  adminAuthAndAuthorization.authorization,
  UserController.deleteUser
);

module.exports = router;
