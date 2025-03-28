const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

router.get(
  "/profile",
  require("../middleware/authMiddleware").protect,
  (req, res) => {
    res.json({ user: req.user });
  }
);

module.exports = router;
