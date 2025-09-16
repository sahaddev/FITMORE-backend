import express from "express";
import Orders from "../models/order.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const orderList = await Orders.find();
        res.json(orderList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;