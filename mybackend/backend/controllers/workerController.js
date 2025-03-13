const Worker = require("../models/Worker");
const bcrypt = require("bcryptjs"); // للتأكد من كلمة المرور

// منطق تسجيل الدخول
const loginWorker = async (req, res) => {
  const { email, password } = req.body;

  try {
    // البحث عن العامل باستخدام البريد الإلكتروني
    const worker = await Worker.findOne({ email });
    if (!worker) {
      return res.status(400).json({ success: false, message: "البريد الإلكتروني غير موجود" });
    }

    // التحقق من كلمة المرور
    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "كلمة المرور غير صحيحة" });
    }

    // تسجيل الدخول بنجاح
    return res.status(200).json({ success: true, username: worker.name });

  } catch (error) {
    return res.status(500).json({ success: false, message: "حدث خطأ في الخادم" });
  }
};

// منطق تسجيل عامل جديد
const registerWorker = async (req, res) => {
  const { name, email, password, phone, city, skill } = req.body;

  try {
    // تحقق من وجود العامل باستخدام البريد الإلكتروني
    const existingWorker = await Worker.findOne({ email });
    if (existingWorker) {
      return res.status(400).json({ success: false, message: "العامل موجود بالفعل" });
    }

    // تشفير كلمة المرور
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // إنشاء عامل جديد
    const newWorker = new Worker({
      name,
      email,
      password: hashedPassword,
      phone,
      city,
      skill,
    });

    // حفظ العامل في قاعدة البيانات
    await newWorker.save();
    return res.status(201).json({ success: true, message: "تم تسجيل العامل بنجاح" });

  } catch (error) {
    return res.status(500).json({ success: false, message: "حدث خطأ في الخادم" });
  }
};

// 🟢 دالة لجلب جميع العمال
const getWorkers = async (req, res) => {
  try {
    const workers = await Worker.find(); // جلب جميع العمال من قاعدة البيانات
    res.status(200).json({ success: true, workers });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ خطأ في جلب العمال", error });
  }
};

// 🟢 دالة لحذف عامل
const deleteWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWorker = await Worker.findByIdAndDelete(id);

    if (!deletedWorker) {
      return res.status(404).json({ success: false, message: "العامل غير موجود" });
    }

    res.status(200).json({ success: true, message: "تم حذف العامل بنجاح" });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ خطأ أثناء حذف العامل", error });
  }
};

// تصدير الدوال
module.exports = { loginWorker, registerWorker, getWorkers, deleteWorker };
