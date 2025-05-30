const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  address: { type: String, required: true },
  service: { type: String, required: true },
  status: { type: String, default: "قيد التنفيذ" },
  date: { type: Date, default: Date.now },
  image: { type: String },
});

const Order = mongoose.model("Order", orderSchema); // ✅ تصحيح هنا

module.exports = Order;
