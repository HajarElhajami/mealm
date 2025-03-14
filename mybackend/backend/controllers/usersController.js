// const bcrypt = require("bcryptjs");
// const User = require("../models/User");

// // 🟢 API لتسجيل مستخدم جديد
// exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password) {
//       return res.status(400).json({ message: "❌ جميع الحقول مطلوبة" });
//     }

//     // التحقق من صحة تنسيق البريد الإلكتروني
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ message: "❌ البريد الإلكتروني غير صالح" });
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

// // 🔵 API للحصول على جميع المستخدمين
// exports.getUsers = async (req, res) => {
//   try {
//     const users = await User.find(); // استرجاع جميع المستخدمين من قاعدة البيانات
//     // إزالة كلمة المرور من الاستجابة
//     const usersWithoutPassword = users.map(user => {
//       const { password, ...userWithoutPassword } = user.toObject();
//       return userWithoutPassword;
//     });
//     res.status(200).json({ success: true, users: usersWithoutPassword });
//   } catch (error) {
//     console.error("خطأ أثناء التسجيل:", error); // طباعة الخطأ في الـ Console
//     res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر", error: error.message });
//   }  
// };

// // // 🔴 API لحذف المستخدم
// // exports.deleteUser = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const objectId = mongoose.Types.ObjectId(id);
// //     await User.findByIdAndDelete(objectId);

// //     // تحقق إذا كان المستخدم موجودًا
// //     const user = await User.findById(id);
// //     if (!user) {
// //       return res.status(404).json({ success: false, message: "❌ المستخدم غير موجود" });
// //     }

// //     // حذف المستخدم
// //     await User.findByIdAndDelete(id);
// //     res.status(200).json({ success: true, message: `✅ تم حذف المستخدم بنجاح: ${user.name}` });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: "❌ حدث خطأ في الحذف", error });
// //   }


  
// // حذف عامل
// const deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;  // الحصول على الـ id من معلمات الطلب

//     // تحقق إذا كان العامل موجودًا في قاعدة البيانات
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: "❌ العامل غير موجود" });
//     }

//     // حذف العامل من قاعدة البيانات
//     await User.findByIdAndDelete(userId);

//     res.status(200).json({
//       success: true,
//       message: "✅ تم حذف العامل بنجاح",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "❌ حدث خطأ أثناء حذف العامل" });
//   }
// };

// module.exports = {
//   registerUser,
//   getUsers,
//   deleteUser,
// };

// // تصدير الدوال
// module.exports = { registerUser, getUsers, deleteUser,  };











const bcrypt = require("bcryptjs");
const User = require("../models/User");

// 🟢 API لتسجيل مستخدم جديد
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "❌ جميع الحقول مطلوبة" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "❌ البريد الإلكتروني غير صالح" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();
    res.status(201).json({ success: true, message: "✅ تم إنشاء المستخدم بنجاح", user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ خطأ في السيرفر", error });
  }
};

// 🔵 API للحصول على جميع المستخدمين
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const usersWithoutPassword = users.map(user => {
      const { password, ...userWithoutPassword } = user.toObject();
      return userWithoutPassword;
    });
    res.status(200).json({ success: true, users: usersWithoutPassword });
  } catch (error) {
    console.error("خطأ أثناء التسجيل:", error);
    res.status(500).json({ success: false, message: "❌ حدث خطأ في السيرفر", error: error.message });
  }
};

// 🔴 API لحذف المستخدم
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "❌ العامل غير موجود" });
    }

    await User.findByIdAndDelete(userId);

    res.status(200).json({
      success: true,
      message: "✅ تم حذف العامل بنجاح",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ حدث خطأ أثناء حذف العامل" });
  }
};
