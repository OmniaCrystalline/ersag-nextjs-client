/** @format */

import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema({
  user: {
    type: String,
    required: [true, "name is required"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

module.exports = Admin;
