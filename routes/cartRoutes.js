const express = require("express");
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getCart);
router.post("/", protect, addToCart);
router.delete("/", protect, removeFromCart);

module.exports = router;
