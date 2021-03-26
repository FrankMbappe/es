const mongoose = require("mongoose");

exports.Package = mongoose.model("Package", {
    record_date: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    picurl: String,
    name: String,
    type: Number,
    weight: Number,
    dimensions: Number,
    description: String
});