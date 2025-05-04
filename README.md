# AdaaJaipur E-Commerce Website – Server

This repository contains the backend server code for the AdaaJaipur E-Commerce Website. It is built with Node.js, Express, and MongoDB, providing RESTful APIs for user authentication, product management, cart and wishlist operations, and order processing.

---

## 🚀 Overview

The AdaaJaipur server handles all backend operations including:

- User registration, login, and authentication with JWT
- Product CRUD and stock management
- Cart and wishlist management per user
- Order placement and order history tracking
- Secure password hashing with bcrypt
- Integration with MongoDB for data persistence

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose ODM)
- Bcrypt (password hashing)
- Jsonwebtoken (JWT authentication)
- dotenv (environment variable management)

---

## ⚡ Getting Started

### 1. Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)

### 2. Clone the Repository

git clone https://github.com/dhairyadev26/AdaaJaipur_server.git
cd AdaaJaipur_server

text

### 3. Install Dependencies

npm install

text

### 4. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000

text

- Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.
- Replace `your_jwt_secret_key` with a secure secret string for JWT signing.
- Optionally adjust the `PORT` if needed.

### 5. Start the Server

npm start

text

By default, the server will run on `http://localhost:5000`.

---

## 📦 API Endpoints

The server exposes RESTful endpoints for:

- **User Authentication:** `/api/auth/register`, `/api/auth/login`
- **Products:** `/api/products` (GET, POST, PUT, DELETE)
- **Cart:** `/api/cart`
- **Wishlist:** `/api/wishlist`
- **Orders:** `/api/orders`

*(Refer to the API documentation or source code for detailed request/response formats.)*

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

For any questions or issues, please open an issue in this repository.

---

**Thank you for contributing to AdaaJaipur!**
