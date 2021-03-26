const mongoose = require("mongoose");

exports.Location = mongoose.model("Location", {
    map: String,
    country: String,
    city: String,
    district: String
});