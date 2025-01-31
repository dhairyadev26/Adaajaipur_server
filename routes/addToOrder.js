import mongoose from "mongoose";
import { OrderModel } from "../models/Order.js";

export const addToOrder = async (req, res) => {
  const orderItems = req.body.orderItems;
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  const orderDate = req.body.orderDate;
  const deliveryAddress = req.body.deliveryAddress;
  const totalAmount = req.body.totalAmount;
  const userId = req.body.id; // userId as string from request body

  console.log(productId, userId);

  try {
    // Convert userId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);

    let order = await OrderModel.findOne({ userId: userObjectId });
    console.log(order);

    if (!order) {
      order = await OrderModel.create({
        userId: userObjectId, // Store ObjectId in DB
        products: [{ productId, quantity }],
        totalAmount: totalAmount,
        address: deliveryAddress,
        createdAt: orderDate,
      });
    } else {
      orderItems.forEach((item) => {
        order.products.push({
          productId: item.product,
          quantity: item.quantity,
        });
      });
      await order.save();
    }

    res.json(order);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
