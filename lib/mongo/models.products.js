/** @format */

import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
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
  price: {
    type: String,
    required: [true, "Price required"],
  },
  weight: {
    type: String,
    required: [true, "weight required"],
  },
  description: {
    type: String,
    required: [true, "Recipe required"],
  },
  usage: {
    type: String,
    required: [true, "usage is required"],
  },
});

const ErsagProduct = mongoose.models.ErsagProduct || mongoose.model("ErsagProduct", ProductSchema);

//const ErsagProduct = mongoose.model("ErsagProduct", ProductSchema);

module.exports = ErsagProduct;
