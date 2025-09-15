const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    id: {
        type: Number, // optional custom ID
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
});

// Collection name: "addresses"
const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
