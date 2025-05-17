const mongoose = require("mongoose"); // استيراد mongoose أولاً

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

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;



















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






























































// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const workerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phone: { type: String },
//   city: { type: String },
//   skill: { type: String },
//   nationalIdImage: { type: String },
//   isAccepted: { type: Boolean, default: false },
//   createdAt: { type: Date, default: Date.now }
// });

// workerSchema.methods.matchPassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// workerSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) next();
  
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

// module.exports = mongoose.model('Worker', workerSchema);