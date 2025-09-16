import mongoose from "mongoose";

const orderHistorySchema = new mongoose.Schema({
    id: { type: Number }, // optional custom ID
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }, // Dart "num" maps best to Number in JS
});

// Collection: "orderhistories"
const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);

export default OrderHistory;
