const express = require("express");
const { registerWorker, loginWorker, getWorkers, deleteWorker } = require("../controllers/workerController");

const router = express.Router();

// مسار تسجيل عامل جديد
router.post("/workers", registerWorker);

// مسار تسجيل الدخول للعامل
router.post("/worker", loginWorker);

// 🟢 مسار جديد لجلب جميع العمال
router.get("/workers", getWorkers);

router.delete("/workers/:id", deleteWorker);


module.exports = router;
