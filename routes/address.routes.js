import express from "express";
import Address from "../models/address.model.js";

const router = express.Router();


// 📋 Get All address
router.get("/", async (req, res) => {
    try {
        const addressList = await Address.find();
        res.json(addressList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;