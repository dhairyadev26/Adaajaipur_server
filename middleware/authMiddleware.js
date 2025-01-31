import jwt from 'jsonwebtoken';

// Middleware to verify token
export const verifyToken = (req, res, next) => {
    // Get token from the Authorization header
    const token = req.headers['authorization'];

    // Check if token is provided
    if (!token) {
        return res.status(403).json({ message: "A token is required for authentication" });
    }

    try {
        // Verify the token and decode it
        const decodedToken = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = { id: decodedToken.id }; // Store user object in request for later use
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }

    return next(); // Proceed to the next middleware or route handler
};
