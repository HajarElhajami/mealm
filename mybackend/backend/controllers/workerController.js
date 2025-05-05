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














































// const Worker = require("../models/Worker");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const path = require("path");
// const mongoose = require("mongoose");
// const Rating = require("../models/Ratings");

// // 🔹 Paramétrage de Multer pour le stockage des images
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Dossier de stockage des images
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Renommer les fichiers avec un timestamp
//   },
// });

// // 🔹 Filtre pour n'accepter que des images
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("❌ Seuls les fichiers JPG, PNG sont autorisés"), false);
//   }
// };

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // Taille maximale : 5 MB
// });

// // 🔹 Inscription d'un nouveau travailleur
// const registerWorker = async (req, res) => {
//   const { name, email, password, phone, city, skill } = req.body;

//   // ✅ Vérifier si l'image a bien été téléchargée
//   if (!req.file) {
//     return res.status(400).json({ success: false, message: "❌ Veuillez télécharger l'image de la carte d'identité" });
//   }

//   const nationalIdImage = req.file.path.replace(path.sep, "/"); // Remplacer les backslashes par des slashes

//   try {
//     // ✅ Vérifier si le travailleur existe déjà
//     const existingWorker = await Worker.findOne({ email });
//     if (existingWorker) {
//       return res.status(400).json({ success: false, message: "❌ Cet e-mail est déjà utilisé, veuillez en utiliser un autre" });
//     }

//     // ✅ Hash du mot de passe
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // ✅ Créer un nouveau travailleur
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
//     return res.status(201).json({ success: true, message: "✅ Travailleur enregistré avec succès" });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "❌ Une erreur s'est produite sur le serveur" });
//   }
// };

// // 🔹 Login d'un travailleur
// const loginWorker = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const worker = await Worker.findOne({ email });
//     if (!worker) {
//       return res.status(400).json({ success: false, message: "❌ L'e-mail n'existe pas" });
//     }

//     const isMatch = await bcrypt.compare(password, worker.password);
//     if (!isMatch) {
//       return res.status(400).json({ success: false, message: "❌ Le mot de passe est incorrect" });
//     }

//     // ✅ Générer le token JWT
//     const token = jwt.sign({ id: worker._id }, "secret", { expiresIn: "7d" });

//     return res.status(200).json({ success: true, token, username: worker.name });
//   } catch (error) {
//     return res.status(500).json({ success: false, message: "❌ Une erreur s'est produite sur le serveur" });
//   }
// };

// // 🔹 Récupérer tous les travailleurs sans afficher les mots de passe
// const getWorkers = async (req, res) => {
//   try {
//     const workers = await Worker.find().select("-password"); // ❌ Exclure les mots de passe
//     res.status(200).json({ success: true, workers });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ Erreur lors de la récupération des travailleurs", error });
//   }
// };

// // 🔹 Supprimer un travailleur
// const deleteWorker = async (req, res) => {
//   try {
//     const workerId = req.params.id;

//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ success: false, message: "❌ Travailleur non trouvé" });
//     }

//     await Worker.findByIdAndDelete(workerId);
//     res.status(200).json({ success: true, message: "✅ Travailleur supprimé avec succès" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ Une erreur est survenue lors de la suppression" });
//   }
// };

// // 🔹 Accepter un travailleur
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
//     console.error("❌ Error in acceptWorker:", error);  // ✅ سجل الخطأ في الكونسول
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
//     console.error("❌ Error in rejectWorker:", error);  // ✅ سجل الخطأ في الكونسول
//     res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء تحديث حالة العامل", error: error.message });
//   }
// };

// // 🔹 Récupérer un travailleur par ID
// const getWorkerById = async (req, res) => {
//   try {
//     const workerId = req.params.id;
//     console.log("محاولة جلب العامل بالـ ID:", workerId); // سجل الـ ID
//     if (!mongoose.Types.ObjectId.isValid(workerId)) {
//       return res.status(400).json({ message: 'ID غير صالح' });
//     }

//     const worker = await Worker.findById(workerId);
//     if (!worker) {
//       return res.status(404).json({ message: 'العامل غير موجود' });
//     }
//     res.status(200).json({ worker });
//   } catch (error) {
//     console.error("حدث خطأ أثناء جلب بيانات العامل:", error);
//     res.status(500).json({ message: 'حدث خطأ أثناء جلب بيانات العامل' });
//   }
// };

// // 🔹 Exporter les fonctions
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

