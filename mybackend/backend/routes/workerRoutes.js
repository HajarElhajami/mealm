const express = require("express");
const router = express.Router();
const workerController = require("../controllers/workerController");

// تسجيل عامل مع رفع صورة البطاقة الوطنية
router.post("/register", workerController.upload.single("nationalIdImage"), workerController.registerWorker);

// تسجيل الدخول
router.post("/login", workerController.loginWorker);

// جلب جميع العمال المقبولين
router.get("/workers", workerController.getAcceptedWorkers);

// جلب عامل معين
router.get("/:id", workerController.getWorker);

// حذف عامل
router.delete("/:id", workerController.deleteWorker);

// قبول عامل
router.put("/accept/:id", workerController.acceptWorker);

// رفض عامل
router.put("/reject/:id", workerController.rejectWorker);

// تحديث صورة العامل
router.put("/:id/upload-image", workerController.upload.single("image"), (req, res) => {
  // يمكنك إضافة معالج هنا أو استخدام دالة من workerController
});

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
// router.post("/worker", loginWorker); // هنا تم التعديل من workerController.loginWorker إلى loginWorker مباشرة
// router.get("/workers", getWorkers);
// router.delete("/workers/:id", deleteWorker);

// router.get("/workers/:id", getWorkerById);

// // ➕ المسارات الجديدة:
// router.patch("/workers/accept/:id", acceptWorker);
// router.patch("/workers/reject/:id", rejectWorker);

// router.post('/login', loginWorker); // هنا أيضًا التعديل نفسه

// module.exports = router;
