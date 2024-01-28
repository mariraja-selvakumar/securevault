const Admin = require("../../models/admin/admin.model");

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
      const user = new Admin(req.body);
      const result = await user.save();
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
};

module.exports = adminController;
