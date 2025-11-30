// COUPON / DISCOUNT MODEL (MongoDB + Mongoose)
// File: /models/Coupon.js

const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },

  type: {
    type: String,
    enum: ["percentage", "fixed"], // % discount or fixed amount
    required: true,
  },

  discountValue: {
    type: Number,
    required: true,
    min: 0,
  },

  minimumPurchase: {
    type: Number,
    default: 0,
  },

  maxDiscount: {
    type: Number,
    default: null, // only for percentage coupons
  },

  expiresAt: {
    type: Date,
    required: true,
  },

  usageLimit: {
    type: Number,
    default: null, // unlimited usage until expiry
  },

  usedCount: {
    type: Number,
    default: 0,
  },

  active: {
    type: Boolean,
    default: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Coupon", couponSchema);
