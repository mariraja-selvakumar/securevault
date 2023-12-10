const express = require("express");
const router = express.Router();

const UserController = require("../../controllers/admin/user.controller");

router.post("/add", UserController.addUser);
router.get("/users", UserController.getAllUsers);
router.patch("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
