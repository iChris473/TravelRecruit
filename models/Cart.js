
const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    jobId: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    date:{
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Carts", CartSchema)