import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cart from "./routes/cart.routes.js";
import order from "./routes/order.routes.js";
import address from "./routes/address.routes.js";
import favorites from "./routes/favorite.routes.js";


const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose
    .connect("mongodb://localhost:27017/appdb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes


app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cart);
app.use("/api/orderHistory", order);
app.use("/api/address", address);
app.use("/api/favorites", favorites);

app.get("/", (req, res) => {
    res.send("Hello, Node.js + Mongoose server is running!");
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
