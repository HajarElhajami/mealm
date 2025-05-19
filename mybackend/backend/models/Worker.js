// const mongoose = require("mongoose"); // استيراد mongoose أولاً

// const workerSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     phone: { type: String, required: true },
//     city: { type: String, required: true },
//     skill: { type: String, required: true },
//     nationalIdImage: { type: String, required: true },
//     isAccepted: { type: Boolean, default: false },
//     ordersCount: { type: Number, default: 0 },
//     ratingsCount: { type: Number, default: 0 },
//     averageRating: { type: Number, default: 0 },
//     ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
//   },
//   { timestamps: true }
// );

// const Worker = mongoose.model("Worker", workerSchema);

// module.exports = Worker;



















// const mongoose = require("mongoose");

// const workerSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     phone: { type: String, required: true },
//     city: { type: String, required: true },
//     skill: { type: String, required: true },
//     nationalIdImage: { type: String, required: true },
//     isAccepted: { type: Boolean, default: false },
//     emailVerified: { type: Boolean, default: false }, // إضافة حقل التحقق من البريد الإلكتروني
//     ordersCount: { type: Number, default: 0 },
//     ratingsCount: { type: Number, default: 0 },
//     averageRating: { type: Number, default: 0 },
//     ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
//   },
//   { timestamps: true }
// );


























































// models/Worker.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const workerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    skill: { type: String, required: true },
    nationalIdImage: { type: String, required: true },
    isAccepted: { type: Boolean, default: false },
    ordersCount: { type: Number, default: 0 },
    ratingsCount: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }],
  },
  { timestamps: true }
);

// إضافة دالة مقارنة كلمة المرور
workerSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;