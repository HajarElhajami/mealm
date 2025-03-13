const express = require("express");
const { loginUser } = require("../controllers/customerController");

const router = express.Router();

// التأكد من أن مسار تسجيل الدخول متاح
router.post("/login", loginUser);

module.exports = router;
