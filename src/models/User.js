const mongoose = require("mongoose");
const { Phone } = require("./Phone");
const { Profile } = require("./Profile");
const { Location } = require("./Location");
const { Rating } = require("./Rating");
const { Settings } = require("./Settings");
const { Pocket } = require("./Pocket");

exports.User = mongoose.model("User", {
    record_date: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    phone: { type: Phone, required: true },
    profile: Profile,
    status: Number,
    home: Location,
    ratings: [Rating],
    verified: String,
    settings: Settings,
    pocket: Pocket
});