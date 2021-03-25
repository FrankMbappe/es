const mongoose = require("mongoose");

exports.Fruit = mongoose.model("Fruit", {
    name: String,
    purchasedOn: { type: Date, default: new Date() }
});