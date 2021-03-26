const mongoose = require("mongoose");

exports.Profile = mongoose.model("Profile", {
    first_name: String,
    last_name: String,
    gender: Number,
    birth_date: Date
});