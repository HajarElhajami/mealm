// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1]; // استخراج التوكن من الرأس
//   if (!token) {
//     return res.status(401).json({ message: "❌ يجب تسجيل الدخول" });
//   }

//   try {
//     const decoded = jwt.verify(token, 'your-secret-key');
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "❌ التوكن غير صالح أو منتهٍ" });
//   }
// };

// // تطبيق الـ middleware على المسار المحمي
// app.get('/api/users', authenticate, (req, res) => {
//   // تنفيذ المنطق الخاص بجلب المستخدمين
// });
