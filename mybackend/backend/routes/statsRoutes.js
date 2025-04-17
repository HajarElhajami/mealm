const express = require("express");
const router = express.Router();
const User = require("../models/User"); // تم التغيير هنا من Customer إلى User
const Worker = require("../models/Worker");
const Order = require("../models/Order");

router.get("/counts", async (req, res) => {
  try {
    const users = await User.countDocuments(); // تم التغيير هنا من customers إلى users
    const workers = await Worker.countDocuments();
    const orders = await Order.countDocuments();
    const completedOrders = await Order.countDocuments({ status: "مكتمل" });

    res.json({ users, workers, orders, completedOrders }); // تم التغيير هنا من customers إلى users
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "خطأ في تحميل الإحصائيات" });
  }
});

module.exports = router;
