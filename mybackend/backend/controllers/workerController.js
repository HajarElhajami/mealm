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

// حذف عامل
const deleteWorker = async (req, res) => {
  try {
    const workerId = req.params.id;  // الحصول على الـ id من معلمات الطلب

    // تحقق إذا كان العامل موجودًا في قاعدة البيانات
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ message: "❌ العامل غير موجود" });
    }

    // حذف العامل من قاعدة البيانات
    await Worker.findByIdAndDelete(workerId);

    res.status(200).json({
      success: true,
      message: "✅ تم حذف العامل بنجاح",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "❌ حدث خطأ أثناء حذف العامل" });
  }
};

module.exports = {
  registerWorker,
  loginWorker,
  getWorkers,
  deleteWorker, // تأكد من أنك تضيف الوظيفة هنا
};

// تصدير الدوال
module.exports = { loginWorker, registerWorker, getWorkers, deleteWorker };
