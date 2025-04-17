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

// 🔹 Paramétrage de Multer pour le stockage des images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Dossier de stockage des images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Renommer les fichiers avec un timestamp
  },
});

// 🔹 Filtre pour n'accepter que des images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("❌ Seuls les fichiers JPG, PNG sont autorisés"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Taille maximale : 5 MB
});

// 🔹 Inscription d'un nouveau travailleur
const registerWorker = async (req, res) => {
  const { name, email, password, phone, city, skill } = req.body;

  // ✅ Vérifier si l'image a bien été téléchargée
  if (!req.file) {
    return res.status(400).json({ success: false, message: "❌ Veuillez télécharger l'image de la carte d'identité" });
  }

  const nationalIdImage = req.file.path.replace(path.sep, "/"); // Remplacer les backslashes par des slashes

  try {
    // ✅ Vérifier si le travailleur existe déjà
    const existingWorker = await Worker.findOne({ email });
    if (existingWorker) {
      return res.status(400).json({ success: false, message: "❌ Cet e-mail est déjà utilisé, veuillez en utiliser un autre" });
    }

    // ✅ Hash du mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Créer un nouveau travailleur
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
    return res.status(201).json({ success: true, message: "✅ Travailleur enregistré avec succès" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "❌ Une erreur s'est produite sur le serveur" });
  }
};

// 🔹 Login d'un travailleur
const loginWorker = async (req, res) => {
  const { email, password } = req.body;

  try {
    const worker = await Worker.findOne({ email });
    if (!worker) {
      return res.status(400).json({ success: false, message: "❌ L'e-mail n'existe pas" });
    }

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "❌ Le mot de passe est incorrect" });
    }

    // ✅ Générer le token JWT
    const token = jwt.sign({ id: worker._id }, "secret", { expiresIn: "7d" });

    return res.status(200).json({ success: true, token, username: worker.name });
  } catch (error) {
    return res.status(500).json({ success: false, message: "❌ Une erreur s'est produite sur le serveur" });
  }
};

// 🔹 Récupérer tous les travailleurs sans afficher les mots de passe
const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find().select("-password"); // ❌ Exclure les mots de passe
    res.status(200).json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ Erreur lors de la récupération des travailleurs", error });
  }
};

// 🔹 Supprimer un travailleur
const deleteWorker = async (req, res) => {
  try {
    const workerId = req.params.id;

    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ success: false, message: "❌ Travailleur non trouvé" });
    }

    await Worker.findByIdAndDelete(workerId);
    res.status(200).json({ success: true, message: "✅ Travailleur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ Une erreur est survenue lors de la suppression" });
  }
};

// 🔹 Exporter les fonctions
module.exports = { registerWorker, loginWorker, getWorkers, deleteWorker, upload };

