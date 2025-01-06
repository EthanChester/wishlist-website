const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            userId: {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ]
});

module.exports = mongoose.model("Wishlist", wishlistSchema);