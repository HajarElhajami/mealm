// const express = require("express");
// const router = express.Router();
// const workerController = require("../controllers/workerController");

// // تسجيل عامل مع رفع صورة البطاقة الوطنية
// router.post("/register", workerController.upload.single("nationalIdImage"), workerController.registerWorker);

// // تسجيل الدخول
// router.post("/login", workerController.loginWorker);

// // جلب جميع العمال المقبولين
// router.get("/workers", workerController.getAcceptedWorkers);

// // جلب عامل معين (استخدم مسارًا مختلفًا لتجنب التكرار)
// router.get("/details/:id", workerController.getWorker);

// // حذف عامل
// router.delete("/:id", workerController.deleteWorker);

// // قبول عامل
// router.put("/accept/:id", workerController.acceptWorker);

// // رفض عامل
// router.put("/reject/:id", workerController.rejectWorker);

// // جلب عامل بواسطة ID
// router.get("/:id", workerController.getWorkerById);

// module.exports = router;




// const express = require("express");
// const { 
//   registerWorker, 
//   loginWorker, 
//   getWorkers, 
//   deleteWorker, 
//   acceptWorker, 
//   rejectWorker, 
//   getWorkerById, 
//   upload 
// } = require("../controllers/workerController");

// const router = express.Router();

// router.post("/workers", upload.single("nationalIdImage"), registerWorker);
// router.post("/worker", loginWorker);
// router.get("/workers", getWorkers);
// router.delete("/workers/:id", deleteWorker);

// router.get("/workers/:id", getWorkerById);

// // ➕ المسارات الجديدة:
// router.patch("/workers/accept/:id", acceptWorker);
// router.patch("/workers/reject/:id", rejectWorker);



// module.exports = router;



















































const express = require("express");
const {
  registerWorker,
  loginWorker,
  getWorkers, // استخدم getWorkers بدلاً من getAcceptedWorkers
  deleteWorker,
  acceptWorker,
  rejectWorker,
  getWorkerById,
  upload
} = require('../controllers/workerController');
const authWorker = require('../middleware/authMiddleware');

const router = express.Router();

// تسجيل عامل جديد
router.post("/workers", upload.single("nationalIdImage"), registerWorker);

// تسجيل الدخول
router.post("/login", loginWorker);

// جلب جميع العمال (استبدل getAcceptedWorkers بـ getWorkers)
router.get("/workers", getWorkers);

// حذف عامل
router.delete("/workers/:id", deleteWorker);

// جلب عامل معين
router.get("/workers/:id", getWorkerById);

// قبول عامل
router.patch("/workers/accept/:id", acceptWorker);

// رفض عامل
router.patch("/workers/reject/:id", rejectWorker);

// مسارات تحتاج مصادقة
router.get("/protected-route/:id", authWorker, getWorkerById);

module.exports = router;


































































// const express = require("express");
// const {
//   registerWorker,
//   loginWorker,
//   getWorkers,
//   deleteWorker,
//   acceptWorker,
//   rejectWorker,
//   getWorkerById,
//   upload
// } = require('../controllers/workerController');
// const authWorker = require('../middleware/authMiddleware');

// const router = express.Router();

// // تسجيل عامل جديد
// router.post("/workers", upload.single("nationalIdImage"), registerWorker);

// // تسجيل الدخول
// router.post("/login", loginWorker); // تم التعديل هنا

// // جلب جميع العمال
// router.get("/workers", workerController.getAcceptedWorkers,);

// // حذف عامل
// router.delete("/workers/:id", deleteWorker);

// // جلب عامل معين
// router.get("/workers/:id", getWorkerById);

// // قبول عامل
// router.patch("/workers/accept/:id", acceptWorker);

// // رفض عامل
// router.patch("/workers/reject/:id", rejectWorker);

// // مسارات تحتاج مصادقة
// router.get("/protected-route/:id", authWorker, getWorkerById);

// module.exports = router;