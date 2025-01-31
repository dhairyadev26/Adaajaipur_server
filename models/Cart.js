import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      // productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      productId: { type: Number, ref: "Product" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

export const CartModel = mongoose.model("Cart", cartSchema);

// module.exports = mongoose.model("Cart", cartSchema);
