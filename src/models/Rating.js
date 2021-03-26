const mongoose = require("mongoose");

exports.Rating = mongoose.model("Rating", {
    record_date: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    author_id: Number,
    stars: Number,
    comment: String
});