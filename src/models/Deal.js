const mongoose = require("mongoose");

exports.Deal = mongoose.model("Deal", {
    record_date: Date,
    left: String,
    right: String,
    price: Number,
    extra_fees: Number
});