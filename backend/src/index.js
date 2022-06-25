require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connectDB = require('./api/config/dbConn');

const app = express();

// Connecting to the Database
connectDB();

app.get("/", (req, res) => {
    res.send("hello world");    
});


mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
});
