require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig"); // استيراد إعدادات قاعدة البيانات
const User = require("./models/User"); // استيراد نموذج User

// استيراد المسارات
const usersRoutes = require("./routes/usersRoutes");
const loginRoutes = require("./routes/customerRoutes"); 
const workerRoutes = require("./routes/workerRoutes");

const app = express();
app.use(express.json());
app.use(cors());

 // الاتصال بقاعدة البيانات
connectDB()
.then(async () => {
  // ✅ جلب جميع المستخدمين للتحقق من البيانات
  // const users = await User.find(); // الآن يمكننا استخدام User
  // console.log("📢 جميع المستخدمين في قاعدة البيانات:", users);
}).catch(err => console.error("❌ خطأ في الاتصال بقاعدة البيانات:", err));


// connectDB().then(() => {
//   console.log("✅ متصل بقاعدة البيانات MongoDB");
// }).catch(err => console.error("❌ خطأ في الاتصال بقاعدة البيانات:", err));


// استخدام المسارات
app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/worker", workerRoutes);

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
});























// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/dbConfig"); // استيراد إعدادات قاعدة البيانات
// const User = require("./models/User"); // استيراد نموذج User
// const customerRoutes = require("./routes/customerRoutes"); // استيراد مسارات الزبائن

// const app = express();
// app.use(express.json());
// app.use(cors());

// // الاتصال بقاعدة البيانات
// connectDB().then(async () => {
//   // ✅ جلب جميع العملاء للتحقق من البيانات
//   const users = await User.find();
//   console.log("📢 جميع المستخدمين في قاعدة البيانات:", users);
// }).catch(err => console.error("❌ خطأ في الاتصال بقاعدة البيانات:", err));

// // استخدام المسارات
// app.use("/api/customer", customerRoutes);

// // تشغيل السيرفر
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
// });
