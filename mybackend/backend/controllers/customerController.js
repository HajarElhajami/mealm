const User = require("../models/User"); 
const bcrypt = require("bcryptjs");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // البحث عن المستخدم في جدول users
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "❌ البريد الإلكتروني غير موجود" });
    }

    // التحقق من كلمة المرور
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "❌ كلمة المرور غير صحيحة" });
    }

    // تسجيل الدخول بنجاح
    return res.status(200).json({ success: true, username: user.email });
  } catch (error) {
    return res.status(500).json({ success: false, message: "❌ حدث خطأ في الخادم" });
  }
};

module.exports = { loginUser };
