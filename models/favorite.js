const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    id: {
        type: Number, // custom ID (optional, since MongoDB has _id)
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

// Collection name will be "favorites"
const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
