const jwt = require("jsonwebtoken");
const Admin = require("../../models/auth/auth.model");

const secretKey = process.env.JWT_SECRET_KEY;

const authController = {
  auth: async (req, res) => {
    try {
      const { username, password } = req.body;
      const currentDateTime = new Date();
      const expireAt = new Date(currentDateTime.getTime() + 30 * 60 * 1000)
        .toLocaleString()
        .toUpperCase();

      const admin = await Admin.findOne({ username });
      if (!admin)
        return res.status(401).json({ error: "Authentication failed 1" });

      const token = jwt.sign({ username, password }, secretKey, {
        expiresIn: 60 * 60,
      });

      res.status(200).json({ token, expireAt });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  },
  addAuth: async (req, res, next) => {
    try {
      const auth = new Admin(req.body);
      const result = await auth.save();
      res.send(result);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },
};

module.exports = authController;
