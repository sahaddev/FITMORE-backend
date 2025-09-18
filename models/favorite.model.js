import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
    id: { type: Number, required: true }, // custom ID (optional, since MongoDB has _id)
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

// Collection: "favorites"
const Favorite = mongoose.model("Favorite", favoriteSchema);

export default Favorite;
