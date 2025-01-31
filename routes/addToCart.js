import mongoose from "mongoose";
import { CartModel } from "../models/Cart.js";

export const addToCart = async (req, res) => {
  const productId = req.body.productId;
  const quantity = req.body.quantity;
  const userId = req.body.id; // userId as string from request body

  console.log(productId, quantity, userId);

  try {
    // Convert userId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);

    let cart = await CartModel.findOne({ userId: userObjectId });
    console.log(cart);

    if (!cart) {
      cart = await CartModel.create({
        userId: userObjectId, // Store ObjectId in DB
        products: [{ productId, quantity }],
      });
    } else {
      const productIndex = cart.products.findIndex(
        (item) => item.productId.toString() === productId
      );

      if (productIndex >= 0) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
      await cart.save();
    }

    res.json({ added: true, cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCartDetails = async (req, res) => {
  try {
    const userId = req.body.id; // userId as string from request body

    const userObjectId = new mongoose.Types.ObjectId(userId);

    let cart = await CartModel.findOne({ userId: userObjectId });
    console.log("this is details", cart);
    res.json(cart);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
};
