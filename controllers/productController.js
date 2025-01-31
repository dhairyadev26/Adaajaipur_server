import Product from "../models/Product.js";


// Get All Products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create New Product (Admin)
const createProduct = async (req, res) => {
  const { name, description, price, category, stock, image } = req.body;

  // Basic validation
  if (!name || !description || !price || !category || !stock || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = await Product.create({ name, description, price, category, stock, image });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllProducts, getProductById, createProduct };

