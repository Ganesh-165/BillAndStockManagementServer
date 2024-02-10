const mongoose = require("mongoose");

const itemModal = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const itemCollection = mongoose.model("itemModal", itemModal);

module.exports = itemCollection;
