// CUSTOM INPUT MODEL (MongoDB + Mongoose)
// File: /models/CustomInput.js
// This model stores customizable input fields for products

const mongoose = require("mongoose");

const customInputSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  fields: [
    {
      label: {
        type: String,
        required: true, // e.g., "Custom Text", "Choose Color", etc.
      },
      inputType: {
        type: String,
        enum: ["text", "textarea", "color", "select", "image", "number"],
        required: true,
      },
      required: {
        type: Boolean,
        default: false,
      },
      options: {
        type: [String],
        default: [], // only for select dropdown
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CustomInput", customInputSchema);
