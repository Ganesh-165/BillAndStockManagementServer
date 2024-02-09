const mongoose = require("mongoose");

const singleItemModal = new mongoose.Schema(
  {
    itemId: {
      type: Number,
      required: true,
    },
    itemSize: {
      type: String,
      required: true,
    },
    itemQuantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const singleItemCollection = mongoose.model(
  "singleItemCollection",
  singleItemCollection
);

module.exports = singleItemCollection;
