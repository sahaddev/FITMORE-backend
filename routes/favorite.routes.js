import express from "express";
import Favorite from "../models/favorite.model.js";

const router = express.Router();

// ➕ Add favorite
router.post("/", async (req, res) => {
    try {
        const newItem = new Favorite(req.body);
        const savedFavorite = await newItem.save();
        res.status(201).json(savedFavorite);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 📋 Get All favorite
router.get("/", async (req, res) => {
    try {
        const favoirite = await Favorite.find();
        res.json(favoirite);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
