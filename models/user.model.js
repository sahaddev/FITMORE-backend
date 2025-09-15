import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    profile: { type: String },
    active: { type: Boolean, default: true },
});

// Collection: "users"
const User = mongoose.model("User", userSchema);

export default User;
