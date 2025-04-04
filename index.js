const express = require("express");
const createError = require("http-errors");

require("dotenv").config();
require("./initDB")();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./initDB");

const adminAuthController = require("./controllers/auth/adminAuth.controller");
app.use("/admin/auth", adminAuthController.auth);

const AdminRoutes = require("./routes/admin/admin.route");
const AdminUserRoutes = require("./routes/admin/user.route");
const adminAuthAndAuthorization = require("./middlewares/admin.auth");

app.use("/admin", adminAuthAndAuthorization.authentication, AdminRoutes);
app.use(
  "/admin/user",
  adminAuthAndAuthorization.authentication,
  AdminUserRoutes
);

app.use((req, res, next) => {
  next(createError(404, "Not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT + "...");
});
