const mongoose = require("mongoose");

exports.Pocket = mongoose.model("Pocket", {
    saved_users: [String],
    saved_dlv: [String]
});