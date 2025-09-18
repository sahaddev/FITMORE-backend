import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    id: { type: Number }, // optional custom ID
    name: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    phonenumber: { type: String, required: true },
});

// Collection: "addresses"
const Address = mongoose.model("Address", addressSchema);

export default Address;
