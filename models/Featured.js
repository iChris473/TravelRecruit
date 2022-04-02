
const mongoose = require("mongoose")

const FeaturedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }


}, {timestamps: true})

module.exports = mongoose.model("Featureds", FeaturedSchema)