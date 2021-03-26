const mongoose = require("mongoose");

exports.Phone = mongoose.model("Phone", {
    country: String,
    number: { type: String, required: true }
});