const mongoose = require("mongoose");
const { User } = require("./User");
const { Recipient } = require("./Recipient");
const { Location } = require("./Location");
const { Deal } = require("./Deal");
const { Package } = require("./Package");

exports.Delivery = mongoose.model("Delivery", {
    record_date: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    // REQUIRED
    sender: { type: User, required: true },
    recipient: { type: Recipient, required: true },
    packages: { type: [Package], required: true },
    origin: { type: Location, required: true },
    destination: { type: Location, required: true },
    deadline: { type: Date, required: true },

    // OPTIONAL
    status: { type: Number, default: 0 },
    carrier: User,
    deal: Deal,
    start: Date,
    end: Date
});