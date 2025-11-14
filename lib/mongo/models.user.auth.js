/** @format */

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
