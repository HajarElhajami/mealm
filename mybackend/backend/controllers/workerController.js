const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const Worker = require("../models/Worker.js");
const Rating = require("../models/Ratings.js");

// 🔹 إعداد Multer لتخزين الصور
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("❌ فقط ملفات JPG, PNG مسموحة"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

// 🔹 تسجيل عامل جديد
const registerWorker = async (req, res) => {
  const { name, email, password, phone, city, skill } = req.body;

  if (!req.file) {
    return res.status(400).json({ success: false, message: "❌ يرجى رفع صورة البطاقة الوطنية" });
  }

  const nationalIdImage = req.file.path.replace(path.sep, "/");

  try {
    const existingWorker = await Worker.findOne({ email });
    if (existingWorker) {
      return res.status(400).json({ success: false, message: "❌ البريد مستخدم من قبل" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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
    return res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر" });
  }
};

// 🔹 تسجيل الدخول
const loginWorker = async (req, res) => {
  const { email, password } = req.body;

  try {
    const worker = await Worker.findOne({ email });
    if (!worker) {
      return res.status(400).json({ success: false, message: "❌ البريد غير موجود" });
    }

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "❌ كلمة المرور خاطئة" });
    }

    const token = jwt.sign({ id: worker._id }, "secret", { expiresIn: "7d" });
    return res.status(200).json({ success: true, token, username: worker.name });
  } catch (error) {
    return res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر" });
  }
};

// 🔹 جلب كل العمال مع التقييمات
const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find()
      .select("-password")
      .populate("ratings", "score comment user");

    const formattedWorkers = workers.map(worker => ({
      _id: worker._id,
      name: worker.name,
      email: worker.email,
      phone: worker.phone,
      city: worker.city,
      skill: worker.skill,
      nationalIdImage: worker.nationalIdImage,
      isAccepted: worker.isAccepted,
      ordersCount: worker.ordersCount,
      ratingsCount: worker.ratingsCount,
      averageRating: worker.averageRating,
      ratings: worker.ratings,
    }));

    res.status(200).json({ success: true, workers: formattedWorkers });
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ success: false, message: "❌ خطأ في تحميل العمال" });
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
    res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء الحذف" });
  }
};

// 🔹 قبول عامل
const acceptWorker = async (req, res) => {
  try {
    const workerId = req.params.id;
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
    }

    worker.isAccepted = true;
    await worker.save();
    res.status(200).json({ success: true, message: "✅ تم قبول العامل بنجاح" });
  } catch (error) {
    console.error("❌ Error in acceptWorker:", error);
    res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء تحديث حالة العامل", error: error.message });
  }
};

// 🔹 رفض عامل
const rejectWorker = async (req, res) => {
  try {
    const workerId = req.params.id;
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
    }

    worker.isAccepted = false;
    await worker.save();
    res.status(200).json({ success: true, message: "✅ تم رفض العامل بنجاح" });
  } catch (error) {
    console.error("❌ Error in rejectWorker:", error);
    res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء تحديث حالة العامل", error: error.message });
  }
};

// 🔹 جلب عامل بواسطة ID
const getWorkerById = async (req, res) => {
  try {
    const workerId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(workerId)) {
      return res.status(400).json({ message: '❌ ID غير صالح' });
    }

    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ message: '❌ العامل غير موجود' });
    }
    res.status(200).json({ worker });
  } catch (error) {
    console.error("❌ خطأ أثناء جلب بيانات العامل:", error);
    res.status(500).json({ message: '❌ خطأ أثناء جلب بيانات العامل' });
  }
};

// تصدير الدوال
module.exports = {
  registerWorker,
  loginWorker,
  getWorkers,
  deleteWorker,
  acceptWorker,
  rejectWorker,
  getWorkerById,
  upload 
};































































// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const mongoose = require("mongoose");
// const Worker = require("../models/Worker.js");
// const Rating = require("../models/Ratings.js");

// // 🔹 إعداد Multer لتخزين الصور
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("❌ فقط ملفات JPG, PNG مسموحة"), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// // 🔹 تسجيل عامل جديد
// const registerWorker = async (req, res) => {
//   const { name, email, password, phone, city, skill } = req.body;

//   if (!req.file) {
//     return res.status(400).json({ success: false, message: "❌ يرجى رفع صورة البطاقة الوطنية" });
//   }

//   const nationalIdImage = req.file.path.replace(path.sep, "/");

//   try {
//     const existingWorker = await Worker.findOne({ email });
//     if (existingWorker) {
//       return res.status(400).json({ success: false, message: "❌ البريد مستخدم من قبل" });
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
//     return res.status(201).json({ success: true, message: "✅ تم تسجيل العامل بنجاح" });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر" });
//   }
// };

// // 🔹 تسجيل الدخول
// const loginWorker = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const worker = await Worker.findOne({ email });
//     if (!worker) {
//       return res.status(400).json({ success: false, message: "❌ البريد غير موجود" });
//     }

//     const isMatch = await bcrypt.compare(password, worker.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: "❌ كلمة المرور خاطئة" });
//     }

//     const token = jwt.sign({ id: worker._id }, "secret", { expiresIn: "7d" });
//     return res.status(200).json({ success: true, token, username: worker.name });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر" });
//   }
// };

// // 🔹 جلب كل العمال مع التقييمات
// const getWorkers = async (req, res) => {
//   try {
//     const workers = await Worker.find()
//       .select("-password")
//       .populate("ratings", "score comment user");

//     const formattedWorkers = workers.map(worker => ({
//       _id: worker._id,
//       name: worker.name,
//       email: worker.email,
//       phone: worker.phone,
//       city: worker.city,
//       skill: worker.skill,
//       nationalIdImage: worker.nationalIdImage,
//       isAccepted: worker.isAccepted,
//       ordersCount: worker.ordersCount,
//       ratingsCount: worker.ratingsCount,
//       averageRating: worker.averageRating,
//       ratings: worker.ratings,
//     }));

//     res.status(200).json({ success: true, workers: formattedWorkers });
//   } catch (error) {
//     console.error("Error fetching workers:", error);
//     res.status(500).json({ success: false, message: "❌ خطأ في تحميل العمال" });
//   }
// };

// // 🔹 حذف عامل
// const deleteWorker = async (req, res) => {
//   try {
//     const workerId = req.params.id;

//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
//     }

//     await Worker.findByIdAndDelete(workerId);
//     res.status(200).json({ success: true, message: "✅ تم حذف العامل بنجاح" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء الحذف" });
//   }
// };

// // 🔹 قبول عامل
// const acceptWorker = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
//     }

//     worker.isAccepted = true;
//     await worker.save();
//     res.status(200).json({ success: true, message: "✅ تم قبول العامل بنجاح" });
//   } catch (error) {
//     console.error("❌ Error in acceptWorker:", error);
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء تحديث حالة العامل", error: error.message });
//   }
// };

// // 🔹 رفض عامل
// const rejectWorker = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
//     }

//     worker.isAccepted = false;
//     await worker.save();
//     res.status(200).json({ success: true, message: "✅ تم رفض العامل بنجاح" });
//   } catch (error) {
//     console.error("❌ Error in rejectWorker:", error);
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء تحديث حالة العامل", error: error.message });
//   }
// };

// // 🔹 جلب عامل بواسطة ID
// const getWorkerById = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     if (!mongoose.Types.ObjectId.isValid(workerId)) {
//       return res.status(400).json({ message: '❌ ID غير صالح' });
//     }

//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ message: '❌ العامل غير موجود' });
//     }
//     res.status(200).json({ worker });
//   } catch (error) {
//     console.error("❌ خطأ أثناء جلب بيانات العامل:", error);
//     res.status(500).json({ message: '❌ خطأ أثناء جلب بيانات العامل' });
//   }
// };

// // تصدير الدوال
// module.exports = {
//   registerWorker,
//   loginWorker,
//   getWorkers,
//   deleteWorker,
//   acceptWorker,
//   rejectWorker,
//   getWorkerById,
//   upload 
// };

























// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const mongoose = require("mongoose");
// const nodemailer = require("nodemailer");
// const Worker = require("../models/Worker.js");
// const Rating = require("../models/Ratings.js");

// // إعداد Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
// });
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   cb(null, allowedTypes.includes(file.mimetype));
// };
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 },
// });

// // إعداد البريد
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // تسجيل عامل
// const registerWorker = async (req, res) => {
//   const { name, email, password, phone, city, skill } = req.body;

//   if (!req.file) {
//     return res.status(400).json({ success: false, message: "❌ يرجى رفع صورة البطاقة الوطنية" });
//   }

//   const nationalIdImage = req.file.path.replace(/\\/g, "/");

//   try {
//     const existingWorker = await Worker.findOne({ email });
//     if (existingWorker) {
//       return res.status(400).json({ success: false, message: "❌ البريد مستخدم من قبل" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

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
//     return res.status(201).json({ success: true, message: "✅ تم تسجيل العامل بنجاح" });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر" });
//   }
// };

// // تسجيل الدخول
// const loginWorker = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const worker = await Worker.findOne({ email });
//     if (!worker) {
//       return res.status(400).json({ success: false, message: "❌ البريد غير موجود" });
//     }

//     const isMatch = await bcrypt.compare(password, worker.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: "❌ كلمة المرور خاطئة" });
//     }

//     if (!worker.emailVerified) {
//       return res.status(403).json({ success: false, message: "❌ لم يتم التحقق من البريد الإلكتروني" });
//     }

//     const token = jwt.sign({ id: worker._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//     return res.status(200).json({ success: true, token, username: worker.name });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر" });
//   }
// };

// // قبول عامل
// const acceptWorker = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
//     }

//     worker.isAccepted = true;

//     const verificationLink = `${process.env.FRONTEND_URL}/verify-email/${worker._id}`;

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: worker.email,
//       subject: "تحقق من بريدك الإلكتروني",
//       text: `مرحبًا ${worker.name},\n\nيرجى النقر على الرابط التالي للتحقق من بريدك الإلكتروني: \n${verificationLink}`,
//     };

//     await transporter.sendMail(mailOptions);
//     await worker.save();

//     res.status(200).json({ success: true, message: "✅ تم قبول العامل بنجاح، تم إرسال رابط التحقق." });
//   } catch (error) {
//     console.error("❌ Error in acceptWorker:", error);
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء التحديث" });
//   }
// };

// // باقي الدوال بدون تغيير جوهري:
// const getWorkers = async (req, res) => {
//   try {
//     const workers = await Worker.find().select("-password").populate("ratings", "score comment user");
//     const formattedWorkers = workers.map(worker => ({
//       _id: worker._id,
//       name: worker.name,
//       email: worker.email,
//       phone: worker.phone,
//       city: worker.city,
//       skill: worker.skill,
//       nationalIdImage: worker.nationalIdImage,
//       isAccepted: worker.isAccepted,
//       ordersCount: worker.ordersCount,
//       ratingsCount: worker.ratingsCount,
//       averageRating: worker.averageRating,
//       ratings: worker.ratings,
//     }));
//     res.status(200).json({ success: true, workers: formattedWorkers });
//   } catch (error) {
//     console.error("Error fetching workers:", error);
//     res.status(500).json({ success: false, message: "❌ خطأ في تحميل العمال" });
//   }
// };

// const deleteWorker = async (req, res) => {
//   try {
//     const worker = await Worker.findById(req.params.id);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
//     }
//     await Worker.findByIdAndDelete(req.params.id);
//     res.status(200).json({ success: true, message: "✅ تم حذف العامل" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء الحذف" });
//   }
// };

// const rejectWorker = async (req, res) => {
//   try {
//     const worker = await Worker.findById(req.params.id);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
//     }
//     worker.isAccepted = false;
//     await worker.save();
//     res.status(200).json({ success: true, message: "✅ تم رفض العامل" });
//   } catch (error) {
//     console.error("❌ Error in rejectWorker:", error);
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء التحديث" });
//   }
// };

// const getWorkerById = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     if (!mongoose.Types.ObjectId.isValid(workerId)) {
//       return res.status(400).json({ message: '❌ ID غير صالح' });
//     }

//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ message: '❌ العامل غير موجود' });
//     }
//     res.status(200).json({ worker });
//   } catch (error) {
//     console.error("❌ خطأ أثناء جلب بيانات العامل:", error);
//     res.status(500).json({ message: '❌ خطأ أثناء جلب بيانات العامل' });
//   }
// };

// // التحقق من البريد الإلكتروني عبر الرابط
// exports.verifyEmail = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     const worker = await Worker.findById(workerId);

//     if (!worker) {
//       return res.status(404).json({ message: "العامل غير موجود." });
//     }

//     // مثلاً نطلب منه إدخال البريد وكلمة السر مرة أخرى
//     const { email, password } = req.body;

//     if (worker.email !== email) {
//       return res.status(401).json({ message: "البريد الإلكتروني غير صحيح." });
//     }

//     const isMatch = await bcrypt.compare(password, worker.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "كلمة المرور غير صحيحة." });
//     }

//     // السماح له بإكمال الملف الشخصي
//     res.status(200).json({
//       message: "تم التحقق بنجاح.",
//       name: worker.fullName,
//       city: worker.city,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء التحقق.", error });
//   }
// };

// exports.verifyEmail = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     const { email, password } = req.body;

//     // تحقق من وجود العامل بهذا الـ ID
//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ message: "العامل غير موجود" });
//     }

//     // تحقق من صحة البريد الإلكتروني وكلمة المرور
//     if (worker.email !== email || worker.password !== password) {
//       return res.status(401).json({ message: "بيانات الدخول غير صحيحة" });
//     }

//     // إرسال معلومات معينة فقط
//     res.status(200).json({
//       id: worker._id,
//       fullName: worker.fullName,
//       city: worker.city,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ ما", error });
//   }
// };


// const verifyEmail = async (req, res) => {
//   const { id } = req.params;
//   try {
//     // مثال على تحديث الحقل isVerified
//     const worker = await Worker.findByIdAndUpdate(id, { isVerified: true }, { new: true });
//     if (!worker) {
//       return res.status(404).json({ message: "العامل غير موجود" });
//     }
//     res.status(200).json({ message: "تم تأكيد البريد الإلكتروني", worker });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء تأكيد البريد", error: error.message });
//   }
// };


// module.exports = {
//   upload, // ✅ أضف هذه
//   registerWorker,
//   loginWorker,
//   getWorkers,
//   deleteWorker,
//   acceptWorker,
//   rejectWorker,
//   getWorkerById,
//   verifyEmail
// };
