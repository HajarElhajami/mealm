// const express = require("express");
// const multer = require('multer');
// const { createOrder, getOrders, updateOrderStatus } = require("../controllers/orderController.js");

// const router = express.Router();
// const upload = multer({ dest: 'uploads/' });

// router.post("/", createOrder);
// router.get("/", getOrders);
// router.put("/:id", updateOrderStatus);
// router.post('/orders', upload.single('image'), createOrder);

// module.exports = router;












const express = require("express");
const multer = require("multer");
const {
  createOrder,
  getOrders,
  updateOrderStatus,
} = require("../controllers/orderController.js");

const router = express.Router();

// 📁 إعداد تحميل الصورة
const upload = multer({ dest: "uploads/" });

// 🟢 إنشاء طلب (مع صورة)
router.post("/", upload.single("image"), createOrder);

// 📄 جلب جميع الطلبات
router.get("/", getOrders);

// 🔄 تحديث حالة الطلب
router.put("/:id", updateOrderStatus);

module.exports = router;
