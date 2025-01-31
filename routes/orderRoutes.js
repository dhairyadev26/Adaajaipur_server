import express from 'express';
import { placeOrder, getUserOrders } from '../controllers/orderController.js'; // Adjust path as necessary
import { verifyToken } from '../middleware/authMiddleware.js'; // Adjust path as necessary

const router = express.Router();

router.post('/', verifyToken, placeOrder); // Place order route
router.get('/', verifyToken, getUserOrders); // Get user orders route

export default router;
