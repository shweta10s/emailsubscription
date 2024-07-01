const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: String
},{Timestamp:true})

const userCollection = mongoose.model("", userSchema);

module.exports = userCollection;

