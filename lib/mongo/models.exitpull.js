/** @format */

import mongoose from "mongoose";

const ExitPullSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title name is required"],
    },
  },
  { strict: false }
);

const ExitPull =
  mongoose.models.ExitPull || mongoose.model("ExitPull", ExitPullSchema);

module.exports = ExitPull;
