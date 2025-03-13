const express = require("express");
const { registerUser, getUsers, deleteUser } = require("../controllers/usersController");

const router = express.Router();

// مسار تسجيل المستخدم
router.post("/users", registerUser);

// مسار جلب جميع المستخدمين
router.get("/get", getUsers);

// مسار حذف المستخدم
router.delete("/users/:id", deleteUser);

module.exports = router;
