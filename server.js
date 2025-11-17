// server.js (root of MyPortfolio)

// Import environment variables and libraries
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import the configured Express app and assets router (from Week 3 skeleton)
import app from "./server/express.js";
import router from "./server/assets-router.js";

// Load variables from .env file
dotenv.config();

// Use the assets router for static files
app.use("/src", router);

// Simple root route for the assignment
app.use("/", function (req, res) {
  res.send("Welcome to User application");
});

// Choose port from .env or default 3000
const PORT = process.env.PORT || 3000;

// Connect to MongoDB, then start the server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Export for completeness
export default app;
