const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    id: {
        type: Number, // optional custom ID
    },
    code: {
        type: String,
        required: true,
    },
});

// Collection name will be "coupons"
const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
