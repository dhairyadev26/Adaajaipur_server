import mongoose from "mongoose";
const wishListSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: Number, ref: "Product" },
    },
  ],
});

export const WishListModel = mongoose.model("WishList", wishListSchema);

// module.exports = mongoose.model("Cart", cartSchema);
