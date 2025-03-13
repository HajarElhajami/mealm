// const bcrypt = require("bcryptjs");
// const User = require("../models/User");

// // 🟢 API لتسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "❌ جميع الحقول مطلوبة" });
//     }

//     // تشفير كلمة المرور
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword, role });

//     await newUser.save();
//     res.status(201).json({ success: true, message: "✅ تم إنشاء المستخدم بنجاح", user: newUser });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ خطأ في السيرفر", error });
//   }
// };

// // 🔵 API لجلب جميع المستخدمين
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find(); // جلب جميع المستخدمين من قاعدة البيانات
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: "❌ خطأ في السيرفر", error });
//   }
// };

// // 🔴 API لحذف المستخدم
// exports.deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await User.findByIdAndDelete(id);
//     res.status(200).json({ success: true, message: "✅ تم حذف المستخدم بنجاح" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "❌ حدث خطأ في الحذف", error });
//   }
// };
























const bcrypt = require("bcryptjs");
const User = require("../models/User");

// 🟢 API لتسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "❌ جميع الحقول مطلوبة" });
    }

    // التحقق مما إذا كان البريد الإلكتروني مستخدمًا بالفعل
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "❌ البريد الإلكتروني مستخدم بالفعل" });
    }

    // تشفير كلمة المرور
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();

    // إرجاع المستخدم بدون كلمة المرور
    const { password: _, ...userWithoutPassword } = newUser.toObject();
    res.status(201).json({ success: true, message: "✅ تم إنشاء المستخدم بنجاح", user: userWithoutPassword });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ خطأ في السيرفر", error: error.message });
  }
};

// 🔵 API لجلب جميع المستخدمين
exports.getUsers = async (req, res) => {
  try {
    // جلب جميع المستخدمين بدون كلمة المرور
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "❌ خطأ في السيرفر", error: error.message });
  }
};

// 🔴 API لحذف المستخدم
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // التحقق مما إذا كان المستخدم موجودًا قبل الحذف
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "❌ المستخدم غير موجود" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "✅ تم حذف المستخدم بنجاح" });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ حدث خطأ في الحذف", error: error.message });
  }
};
