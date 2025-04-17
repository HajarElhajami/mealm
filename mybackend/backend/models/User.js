// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, default: "user" }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;










const mongoose = require("mongoose");

// تعريف مخطط البيانات للمستخدم
const userSchema = new mongoose.Schema({
  name: { type: String, required: true }, // الاسم مطلوب
  email: { type: String, required: true, unique: true }, // البريد الإلكتروني مطلوب وفريد
  password: { type: String, required: true }, // كلمة المرور مطلوبة
  role: { type: String, default: "user" } // الدور الافتراضي للمستخدم هو "user"
});

// إنشاء النموذج بناءً على المخطط
const User = mongoose.model("User", userSchema);

// تصدير النموذج لاستخدامه في باقي التطبيق
module.exports = User;
