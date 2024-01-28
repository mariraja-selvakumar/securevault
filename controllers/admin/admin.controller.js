const Admin = require("../../models/admin/admin.model");
const User = require("../../models/admin/user.model");

const adminController = {
  getAllAdmin: async (req, res, next) => {
    try {
      const result = await Admin.find({}, { __v: 0 });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  addAdmin: async (req, res, next) => {
    try {
      const admin = new Admin(req.body);
      const result = await admin.save();
      res.send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
  updateAdmin: async (req, res, next) => {
    try {
      const result = await Admin.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  deleteAdmin: async (req, res, next) => {
    try {
      const result = await Admin.findByIdAndDelete(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
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
      next();
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const result = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const result = await User.findByIdAndDelete(req.params.id);
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = adminController;
