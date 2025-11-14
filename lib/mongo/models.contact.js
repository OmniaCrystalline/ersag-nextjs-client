/** @format */

import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"],
  },
  phone: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  usedProducts: {
    type: Boolean,
    default: false,
  },
  productsUsed: {
    type: [String],
    default: [],
  },
  productsUsedText: {
    type: String,
    default: "",
  },
  likedProducts: {
    type: String,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const ErsagContact =
  mongoose.models.ErsagContact || mongoose.model("ErsagContact", ContactSchema);

module.exports = ErsagContact;

