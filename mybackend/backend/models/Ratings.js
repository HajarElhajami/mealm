// const mongoose = require("mongoose");

// const ratingSchema = new mongoose.Schema({
//   workerId: { type: mongoose.Schema.Types.ObjectId, ref: "Worker", required: true },
//   clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
//   rating: { type: Number, required: true },  // التقييم من 1 إلى 5
//   comment: { type: String },  // تعليق إضافي
//   createdAt: { type: Date, default: Date.now }
// });

// const Rating = mongoose.model("Rating", ratingSchema);

// module.exports = Rating;



// const mongoose = require('mongoose');

// const ratingSchema = new mongoose.Schema({
//   workerId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Worker',
//     required: true
//   },
//   rating: {
//     type: Number,
//     default: 0
//   },
//   status: {
//     type: String,
//     default: 'مقبول'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Rating', ratingSchema);




















const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  score: { type: Number, required: true },
  comment: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // إذا كان لديك نموذج مستخدم
  worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker' } // ربط بالعامل
}, { timestamps: true });

module.exports = mongoose.model("Ratings", ratingSchema);