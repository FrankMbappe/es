const mongoose = require("mongoose");
const { Phone } = require("./Phone");

exports.Recipient = mongoose.model("Recipient", {
    first_name: String,
    last_name: String,
    phone: { type: Phone, required: true },
    description: String
});