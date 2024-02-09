const mongoose = require("mongoose");

const billsModal = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    billDate: {
      type: Date,
      required: true,
    },
    billItems: {
      type: Array,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    billStatus: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      required: true,
    },
    referenceId: {
      type: String,
    },
    billerName: {
      type: String,
      required: true,
    },
    discountPercentage: {
      type: Number,
    },
  },
  { timestamps: true }
);

const billsCollection = mongoose.model("itemModal", billsModal);

module.exports = billsCollection;
