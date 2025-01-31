import mongoose from "mongoose";

// Define the product schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    originalPrice: { type: Number, required: true }, // Original price before discount
    discountPercentage: { type: Number, default: 0 }, // Discount percentage
    rating: {
        rate: { type: Number, default: 0 }, // Average rating
        count: { type: Number, default: 0 } // Number of ratings
    },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: true }, // URL for the main image
    images: [{ type: String }], // Array of additional image URLs
    details: [{ type: String }], // Array of product details
    colors: [
        {
            code: { type: String, required: true }, // Color code (e.g., hex)
            name: { type: String, required: true }  // Color name
        }
    ],
    sizes: [
        {
            size: { type: String, required: true }, // Size description
            stock: { type: Number, default: 0 }     // Stock quantity for this size
        }
    ]
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

const Product = mongoose.model("Product", productSchema);
export default Product; // Ensure this is a default export
