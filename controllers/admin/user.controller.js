const User = require("../../models/admin/user.model");

const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const result = await User.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  addUser: async (req, res, next) => {
    try {
      const user = new User(req.body);
      const result = await user.save();
      res.send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const result = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(result);
    } catch (error) {
      console.log("error", error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const result = await User.findByIdAndDelete(req.params.id);
      res.send(result);
    } catch (error) {
      console.log("error", error);
    }
  },
};

module.exports = userController;
