import express from "express";
import Cart from "../models/cart.model.js";

const router = express.Router();


// 📋 Get All Cart
router.get("/", async (req, res) => {
    try {
        const cartItems = await Cart.find();
        res.json(cartItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;