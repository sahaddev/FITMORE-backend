import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    id: { type: Number, required: true }, // since your Dart model requires it
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    quantity: { type: Number, required: true },
    newPrice: { type: Number, required: true },
});

// Collection: "carts"
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
