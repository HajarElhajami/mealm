
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

// // جلب عامل بواسطة ID
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
  try {
    const { email, password } = req.body;
    
    const worker = await Worker.findOne({ email });
    
    if (!worker) {
      return res.status(401).json({ success: false, message: 'البريد الإلكتروني غير مسجل' });
    }

    if (!worker.isAccepted) {
      return res.status(403).json({ success: false, message: 'الحساب في انتظار الموافقة من الإدارة' });
    }

    const isMatch = await worker.matchPassword(password);
    
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'كلمة المرور غير صحيحة' });
    }

    const token = jwt.sign({ id: worker._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(200).json({
      success: true,
      message: 'تم تسجيل الدخول بنجاح',
      _id: worker._id,
      name: worker.name,
      email: worker.email,
      city: worker.city,
      skill: worker.skill,
      token,
      redirectTo: `/${worker._id}` // إضافة مسار التوجيه
    });
    
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 جلب كل العمال مع التقييمات
const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find()
      .select("-password")
      .populate({
        path: 'ratings',
        model: 'Ratings', // تأكد من تطابق الاسم هنا
        select: 'score comment user'
      });

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
    console.error("Error details:", error);
    res.status(500).json({ 
      success: false, 
      message: "❌ خطأ في تحميل العمال",
      error: error.message 
    });
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

// جلب عامل بواسطة ID
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