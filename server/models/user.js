const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wishlists: [
        {
            wishlistId: {
                type: Schema.Types.ObjectId,
                ref: "Wishlist",
                required: true
            }
        }
    ]
});

module.exports = mongoose.model("User", userSchema);