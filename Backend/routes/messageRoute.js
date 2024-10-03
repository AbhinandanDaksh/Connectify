const express = require("express");
const { getMessage, sendMessage } = require("../controllers/messageController.js");
const isAuthenticated = require("../middleware/isAuthenticated.js");

const router = express.Router();

router.route("/send/:id").post(isAuthenticated, sendMessage);
router.route("/:id").get(isAuthenticated, getMessage);

module.exports = router;
