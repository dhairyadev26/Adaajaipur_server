import mongoose from "mongoose";
import { WishListModel } from "../models/WishList.js";

export const addToWishList = async (req, res) => {
  const productId = req.body.productId;
  const userId = req.body.id; // userId as string from request body

  console.log(productId, userId);

  try {
    // Convert userId to ObjectId
    const userObjectId = new mongoose.Types.ObjectId(userId);

    let cart = await WishListModel.findOne({ userId: userObjectId });

    if (!cart) {
      cart = await WishListModel.create({
        userId: userObjectId, // Store ObjectId in DB
        products: [{ productId }],
      });
      res.json({ added: true, cart });
    } else {
      // Check if productId already exists in the wishlist
      const productExists = cart.products.some(
        (item) => item.productId.toString() == productId
      );

      if (!productExists) {
        cart.products.push({ productId });
        await cart.save();
        res.json({ added: true, cart });
      } else {
        cart.products = cart.products.filter(
          (item) => item.productId.toString() != productId
        );
        await cart.save();
        res.json({ added: false, cart, removed: true });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWishListDetails = async (req, res) => {
  try {
    const userId = req.body.id; // userId as string from request body

    const userObjectId = new mongoose.Types.ObjectId(userId);

    let wishList = await WishListModel.findOne({ userId: userObjectId });
    console.log("this is details", wishList);
    res.json(wishList);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
