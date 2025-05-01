const express = require("express");
const { createCustomer, getCustomers, updateCustomer, getCustomerById } = require("../controllers/customer2Controller");

const router = express.Router();

router.post("/", createCustomer); // إضافة زبون جديد
router.get("/", getCustomers); // جلب جميع الزبائن
router.get("/:id", getCustomerById); // 🆕 جلب بيانات زبون حسب ID
router.put("/:id", updateCustomer); // تحديث بيانات الزبون

module.exports = router;
