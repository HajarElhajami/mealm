const Worker = require('../models/Worker');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.clientLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const worker = await Worker.findOne({ email, isAccepted: true });

    if (!worker) {
      return res.status(401).json({ success: false, message: 'المستخدم غير موجود أو لم يتم قبوله بعد.' });
    }

    const isMatch = await bcrypt.compare(password, worker.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'كلمة المرور غير صحيحة.' });
    }

    const token = jwt.sign({ id: worker._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      success: true,
      token,
      user: {
        id: worker._id,
        name: worker.fullName,
        role: 'client',
        city: worker.city,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'حدث خطأ في السيرفر' });
  }
};


// controllers/workerController.js
exports.loginWorker = (req, res) => {
    const { email, password } = req.body;
  
    // هنا ضع منطق التحقق من بيانات العامل وتوليد التوكن
    res.json({ message: "تم تسجيل الدخول بنجاح" });
  };
  