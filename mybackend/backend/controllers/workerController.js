// const Worker = require("../models/Worker");
// const bcrypt = require("bcryptjs");
// const multer = require("multer");
// const path = require("path");

// // إعدادات multer لتخزين الصور
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // مجلد رفع الصور
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // إضافة توقيت للتأكد من تميز اسم الصورة
//   },
// });

// const nationalIdImage = req.file ? req.file.path : null;
// if (!nationalIdImage) {
//   return res.status(400).json({ success: false, message: "❌ يرجى رفع صورة البطاقة الوطنية" });
// }

// const upload = multer({ storage: storage });

// // منطق تسجيل عامل جديد مع رفع صورة البطاقة الوطنية
// const registerWorker = async (req, res) => {
//   const { name, email, password, phone, city, skill } = req.body;
//   const nationalIdImage = req.file ? req.file.path : null; // الحصول على مسار الصورة إن وجدت

//   try {
//     const existingWorker = await Worker.findOne({ email });
//     if (existingWorker) {
//       return res.status(400).json({ success: false, message: "العامل موجود بالفعل" });
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newWorker = new Worker({
//       name,
//       email,
//       password: hashedPassword,
//       phone,
//       city,
//       skill,
//       nationalIdImage,
//     });

//     await newWorker.save();
//     return res.status(201).json({ success: true, message: "تم تسجيل العامل بنجاح" });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "حدث خطأ في الخادم" });
//   }
// };

// // منطق تسجيل الدخول
// const loginWorker = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const worker = await Worker.findOne({ email });
//     if (!worker) {
//       return res.status(400).json({ success: false, message: "البريد الإلكتروني غير موجود" });
//     }

//     const isMatch = await bcrypt.compare(password, worker.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: "كلمة المرور غير صحيحة" });
//     }

//     return res.status(200).json({ success: true, username: worker.name });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "حدث خطأ في الخادم" });
//   }
// };

// // دالة لجلب جميع العمال
// const getWorkers = async (req, res) => {
//   try {
//     const workers = await Worker.find();
//     res.status(200).json({ success: true, workers });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ خطأ في جلب العمال", error });
//   }
// };

// // حذف عامل
// const deleteWorker = async (req, res) => {
//   try {
//     const workerId = req.params.id;

//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ message: "❌ العامل غير موجود" });
//     }

//     await Worker.findByIdAndDelete(workerId);

//     res.status(200).json({
//       success: true,
//       message: "✅ تم حذف العامل بنجاح",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "❌ حدث خطأ أثناء حذف العامل" });
//   }
// };

// module.exports = { registerWorker, loginWorker, getWorkers, deleteWorker, upload };






















const Worker = require("../models/Worker");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

// 🔹 إعدادات Multer لتخزين الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // مجلد تخزين الصور
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // تسمية الملف باستخدام التوقيت
  },
});

// 🔹 السماح فقط بأنواع الصور المطلوبة
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("❌ فقط ملفات الصور (JPG, PNG) مسموح بها"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // الحد الأقصى 5 ميغا بايت
});

// 🔹 منطق تسجيل عامل جديد مع رفع صورة البطاقة الوطنية
const registerWorker = async (req, res) => {
  const { name, email, password, phone, city, skill } = req.body;

  // ✅ التحقق من رفع الصورة
  if (!req.file) {
    return res.status(400).json({ success: false, message: "❌ يرجى رفع صورة البطاقة الوطنية" });
  }

  const nationalIdImage = req.file.path; // الحصول على مسار الصورة

  try {
    // ✅ التحقق من وجود العامل مسبقًا
    const existingWorker = await Worker.findOne({ email });
    if (existingWorker) {
      return res.status(400).json({ success: false, message: "❌ هذا البريد الإلكتروني مسجل مسبقًا، يرجى استخدام بريد آخر" });
    }

    // ✅ تشفير كلمة المرور
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ إنشاء حساب العامل
    const newWorker = new Worker({
      name,
      email,
      password: hashedPassword,
      phone,
      city,
      skill,
      nationalIdImage,
    });

    await newWorker.save();
    return res.status(201).json({ success: true, message: "✅ تم تسجيل العامل بنجاح" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "❌ حدث خطأ في الخادم" });
  }
};

// 🔹 منطق تسجيل الدخول
const loginWorker = async (req, res) => {
  const { email, password } = req.body;

  try {
    const worker = await Worker.findOne({ email });
    if (!worker) {
      return res.status(400).json({ success: false, message: "❌ البريد الإلكتروني غير موجود" });
    }

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "❌ كلمة المرور غير صحيحة" });
    }

    // ✅ إنشاء `token` لتأمين الجلسات
    const token = jwt.sign({ id: worker._id }, "سر_سري_للغاية", { expiresIn: "7d" });

    return res.status(200).json({ success: true, token, username: worker.name });
  } catch (error) {
    return res.status(500).json({ success: false, message: "❌ حدث خطأ في الخادم" });
  }
};

// 🔹 جلب جميع العمال بدون عرض كلمات المرور
const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find().select("-password"); // ❌ لا تعرض كلمات المرور
    res.status(200).json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ خطأ في جلب العمال", error });
  }
};

// 🔹 حذف عامل
const deleteWorker = async (req, res) => {
  try {
    const workerId = req.params.id;

    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
    }

    await Worker.findByIdAndDelete(workerId);

    res.status(200).json({ success: true, message: "✅ تم حذف العامل بنجاح" });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء حذف العامل" });
  }
};

// 🔹 تصدير الوظائف لاستخدامها في `routes`
module.exports = { registerWorker, loginWorker, getWorkers, deleteWorker, upload };
