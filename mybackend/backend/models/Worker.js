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





















// ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rating' }]
// const mongoose = require("mongoose");

// const workerSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   phone: { type: String, required: true },
//   city: { type: String, required: true },
//   skill: { type: String, required: true },
//   nationalIdImage: { type: String, required: true },
//   isAccepted: { type: Boolean, default: false },
//   ordersCount: { type: Number, default: 0 },
//   ratingsCount: { type: Number, default: 0 },
//   ratings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rating" }],
//   averageRating: { type: Number, default: 0 }
// });

// const Worker = mongoose.model("Worker", workerSchema);

// module.exports = Worker;
