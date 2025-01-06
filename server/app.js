const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const User = require("./models/user");
const authRoutes = require('./routes/auth');
const listRoutes = require('./routes/lists');

const MONGODB_URI = 
    "mongodb+srv://arichester2:dIbez9y5eA2ZFGZG@cluster0.5rzgb.mongodb.net/wishlist?retryWrites=true&w=majority";

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: "sessions",
});

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
        credentials: true
    })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    session({
        secret: "temp secret",
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);

app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

app.use(authRoutes);
app.use(listRoutes);

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

mongoose
    .connect(MONGODB_URI)
    .then((result) => {
        User.findOne().then((user) => {
            if (!user) {
                const user = new User({
                    email: "ari@test.com",
                    password: "asdasd",
                    wishlists: [],
                });
                user.save();
            }
        });
        app.listen(8080);
    })
    .catch((err) => {
        console.log(err);
    });