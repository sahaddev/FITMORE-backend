import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: Number }, // Optional custom ID (MongoDB will auto-generate _id)
    title: { type: String, required: true },
    discription: { type: String, required: true }, // keeping your spelling
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    active: { type: Boolean, default: true },
    productCount: { type: Number, required: true },
});

// Collection: "product"
const Product = mongoose.model("Product", productSchema);

export default Product;
