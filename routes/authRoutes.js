
const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware.js");

// routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// protected route
router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    msg: "Protected route accessed",
    user: req.user,
  });
});

module.exports = router;