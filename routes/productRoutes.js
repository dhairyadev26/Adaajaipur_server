import express from "express";

import { getAllProducts, getProductById, createProduct } from "../controllers/productController.js";

import { verifyToken } from "../middleware/authMiddleware.js";
 // Import the authentication middleware
const router = express.Router();

// Public route to get all products
router.get("/", getAllProducts);

// Public route to get a product by ID
router.get("/:id", getProductById);

// Protected route to create a new product (only accessible by authenticated users)
router.post("/", verifyToken, createProduct);

export default router;
``