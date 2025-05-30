const mongoose = require("mongoose");
const { applyTimestamps } = require("./userModel");

const foodSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    calories: {
      type: Number,
      required: true,
    },
    protein: {
      type: Number,
      required: true,
    },
    carbohydrate: {
      type: Number,
      required: true,
    },
    fat: {
      type: Number,
      required: true,
    },
    fiber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const foodModel = mongoose.model("foods", foodSchema);

module.exports = foodModel;
