const Wishlist = require("../models/wishlist");

exports.getUserLists = async (req, res, next) => {
    console.log(req.session);
    if (!req.user) {
        res.send({ lists: [] });
        console.log("no user");
        return;
    }
    await req.user
        .populate("wishlists.wishlistId")
        .then((user) => {
            const lists = user.wishlists;
            console.log(lists);
            res.send({ lists: lists });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getList = (req, res, next) => {
    const listId = req.params.id;
    console.log(req.params);
    Wishlist.findById(listId)
    .then((wishlist) => {
        console.log(wishlist);
        res.send({ wishlist: wishlist });
    }).catch((err) => {
        res.sendStatus(404);
        console.log(err);
    })
}