const express = require("express");
const { getOtherUsers, login, logout, register } = require("../controllers/userController.js");
const isAuthenticated = require("../middleware/isAuthenticated.js");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/").get(isAuthenticated, getOtherUsers);

module.exports = router;
