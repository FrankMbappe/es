const mongoose = require("mongoose");

exports.Settings = mongoose.model("Settings", {
    set1: String,
    set2: String
});