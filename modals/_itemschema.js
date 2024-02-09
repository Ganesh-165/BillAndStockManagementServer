const mongoose = require("mongoose");

const itemModal = new mongoose.Schema(
  {
    itemId: {
      type: Number,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    itemDetails: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const itemCollection = mongoose.model("itemModal", itemModal);

module.exports = itemCollection;
