// server.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js"; // Import product routes
import orderRoutes from "./routes/orderRoutes.js"; // Import order routes
import authRoutes from "./routes/authRoutes.js"; // Import auth routes
import { verifyToken } from "./middleware/authMiddleware.js"; // Import your auth middleware
import { addToCart, getCartDetails } from "./routes/addToCart.js";
import { addToWishList, getWishListDetails } from "./routes/whisList.js";
import { addToOrder } from "./routes/addToOrder.js";

dotenv.config();

const app = express();
app.use(express.json());
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Mount routes
app.use("/api/products", productRoutes);
app.use("/api/orders", verifyToken, orderRoutes); // Protect order routes with authentication middleware
app.use("/api/auth", authRoutes); // Add authentication routes
app.post("/api/addToCart", addToCart);
app.post("/api/getCartDetails", getCartDetails);
app.post("/api/addToWishList", addToWishList);
app.post("/api/getWishList", getWishListDetails);
app.post("/api/addToOrder", addToOrder);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
