const mongoose = require('mongoose');

const orderHistorySchema = new mongoose.Schema({
    id: {
        type: Number, // optional custom ID
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number, // Dart "num" maps best to Number in JS
        required: true,
    },
});

// Use "orderhistories" collection
const OrderHistory = mongoose.model('OrderHistory', orderHistorySchema);

module.exports = OrderHistory;
