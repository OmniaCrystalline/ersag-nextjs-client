/** @format */

import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [true, "Product id required"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity of product in order required"],
  },
  price: {
    type: Number,
    required: [true, "price of item in order required"],
  },
  title: {
    type: String,
    required: [true, "Title name is required"],
  },
  type: {
    type: String,
    required: [true, "Seller is required"],
  },
  img: {
    type: String,
    required: [true, "Image required"],
  },
});

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  order: {
    type: [OrderItemSchema],
    required: [true, "order required"],
  },
  active: {
    type: Boolean,
    default: true,
  },
  fond: {
    type: Boolean,
    default: false,
    required: [true, "fond type required"],
  },
});

const ErsagOrder =
  mongoose.models.ErsagOrder || mongoose.model("ErsagOrder", OrderSchema);

module.exports = ErsagOrder;
