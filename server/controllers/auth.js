const User = require('../models/user');

exports.postLogin = (req, res, next) => {
    console.log('postLogin');
    console.log(req.body);
    User.findById("6779064e28a035f30ddd8f57")
    .then((user) => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        req.session.save((err) => {
            // res.send(request.sessionID);
            console.log("err", err);
            console.log(req.session);
        });
    })
    .catch((err) => console.log(err));
};

exports.postCreateAccount = (req, res, next) => {
    console.log('postCreateAccount')
    console.log(req.body);
};