const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/Login");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
     name : String,
    email : String,
    mobilenumber : Number,
  
});

const UserModel = mongoose.model("users", userSchema);

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Login successfully");
                } else {
                    res.status(401).json("Incorrect password");
                }
            } else {
                res.status(404).json("No existing account");
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

app.post("/employees", (req, res) => {
    UserModel.create(req.body)
    .then( users => res.json(users))
    .catch(err => res.json(err))
});

app.get("/", (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal server error' });
});

app.listen(3001, () => {
    console.log("The server is running");
});
