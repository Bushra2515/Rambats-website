// PRODUCT MODEL (MongoDB + Mongoose)
// File: /models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  images: [
    {
      type: String, // image URLs
    },
  ],

  // Custom inputs for customizable products
  customizable: {
    type: Boolean,
    default: false,
  },
  customOptions: [
    {
      type: String, // e.g., "text", "image", "color", "size"
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
