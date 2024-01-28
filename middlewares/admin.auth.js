const jwt = require("jsonwebtoken");

const adminAuthAndAuthorization = {
  authentication: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      console.log(decodedToken);
      req.userData = decodedToken;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Authentication error!" });
    }
  },
  authorization: (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { isSuperAdmin } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (isSuperAdmin) next();
      else
        return res.status(401).json({
          error: "Authorization error!",
          message: "Login as Super Admin",
        });
    } catch (error) {
      return res.status(401).json({ message: "Authentication error!", error });
    }
  },
};

module.exports = adminAuthAndAuthorization;
