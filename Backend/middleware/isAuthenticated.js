const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "User not authenticated." });
    }
    
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.id = decode.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = isAuthenticated;

// Example of usage
const req = {
  cookies: {
    token: "your_jwt_token_here"
  },
  id: ""
};

req.id = "sdlbgnjdfn"; // This is just an example of setting the id.
