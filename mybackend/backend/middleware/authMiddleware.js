// backend/middleware/uploadMiddleware.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("❌ فقط ملفات JPG, PNG مسموحة"), false);
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }
});










// const jwt = require("jsonwebtoken");

// const authenticateClient = (req, res, next) => {
//   // استخراج التوكن من الهيدر
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   // إذا لم يكن هناك توكن، إرجاع خطأ مناسب
//   if (!token) {
//     console.error("Token is missing in the Authorization header");  // تتبع الخطأ
//     return res.status(403).json({ message: "❌ يجب تسجيل الدخول. لا يوجد توكن." });
//   }

//   // التحقق من صحة التوكن
//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       console.error("JWT Error:", err);  // تتبع الخطأ
//       return res.status(403).json({ message: "❌ التوكن غير صالح أو منتهي." });
//     }

//     // إذا تم التحقق بنجاح، إضافة البيانات المفككة إلى الطلب
//     req.user = decoded;
//     next();  // متابعة الطلب
//   });
// };

// module.exports = authenticateClient;
