const jwt = require("jsonwebtoken");

const Admin = require("../../models/admin/admin.model");

const secretKey = process.env.JWT_SECRET_KEY;

const adminAuthController = {
  auth: async (req, res) => {
    try {
      const { username, password, isSuperAdmin } = req.body;

      if (isSuperAdmin === undefined)
        return res.status(400).json({ error: "Admin Authentication Error!" });

      const getAdmin = await Admin.findOne({ username });
      if (
        !(
          getAdmin.username === username &&
          getAdmin.password === password &&
          getAdmin.isSuperAdmin === isSuperAdmin
        )
      )
        return res.status(401).json({ error: "username or password error!" });

      const token = jwt.sign({ username, password, isSuperAdmin }, secretKey, {
        expiresIn: 60 * 60,
      });

      const currentDateTime = new Date();
      const expireAt = new Date(currentDateTime.getTime() + 30 * 60 * 1000)
        .toLocaleString()
        .toUpperCase();
      res.status(200).json({ token, expireAt });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  },
};

module.exports = adminAuthController;
