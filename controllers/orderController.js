// import { OrderModel } from "../models/Order.js"; // Adjust the path as necessary

// Function to place an order
export const placeOrder = async (req, res) => {
  // const { products, totalAmount, address } = req.body;
  // if (!products || !totalAmount || !address) {
  //   return res.status(400).json({ message: "All fields are required" });
  // }
  // try {
  //   const newOrder = new Order({
  //     userId: req.user._id, // Assuming user ID is available from middleware
  //     products,
  //     totalAmount,
  //     address,
  //     status: "Pending",
  //   });
  //   const savedOrder = await newOrder.save();
  //   res.status(201).json(savedOrder);
  // } catch (error) {
  //   console.error("Error placing order:", error);
  //   res.status(500).json({ message: "Server error" });
  // }
};

// Function to get orders for a specific user
export const getUserOrders = async (req, res) => {
  // try {
  //   const orders = await OrderModel.find({ userId: req.user._id }); // Fetch orders for the logged-in user
  //   res.status(200).json(orders);
  // } catch (error) {
  //   console.error("Error fetching user orders:", error);
  //   res.status(500).json({ message: "Server error" });
  // }
};
