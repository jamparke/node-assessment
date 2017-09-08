const express = require("express"),
  bodyParser = require("body-parser"),
  userCtrl = require("./userCtrl"),
  app = express(),
  port = 3000;

app.use(bodyParser.json());

app.listen(port, () => console.log(`I'm alive on ${port}`));

// ENDPOINTS //
app.get("/api/users", userCtrl.getAllUsers);
app.get("/api/users/:userId", userCtrl.getUserById);
app.get("/api/admins", userCtrl.getAdmins);
app.get("/api/nonadmins", userCtrl.getNonAdmins);
app.get("/api/user_type/:userType", userCtrl.getByType);
app.put("/api/users/:userId", userCtrl.updateUser);
app.post("/api/users", userCtrl.addUser);
app.delete("/api/users/:userId", userCtrl.deleteUser);
