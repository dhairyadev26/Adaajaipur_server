import mongoose from 'mongoose';
import Product from './models/Product.js'; // Ensure correct path and .js extension

// If using named export
import { products } from '../frontend/src/data/productData.js'; // Ensure correct path and .js extension

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// Function to seed products
const seedProducts = async () => {
    try {
        await Product.deleteMany({}); // Clear existing products (optional)
        await Product.insertMany(products); // Insert new products
        console.log("Products added successfully!");
    } catch (error) {
        console.error("Error adding products:", error);
    } finally {
        mongoose.connection.close(); // Close the connection
    }
};

// Run the seed function
seedProducts();
