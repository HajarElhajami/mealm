const Rating = require("../models/Rating");
const Worker = require("../models/Worker");
const Client = require("../models/User");

// إضافة التقييم
const addRating = async (req, res) => {
  const { workerId, rating, comment } = req.body; // استلام بيانات التقييم

  try {
    // التحقق من وجود العامل
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
    }

    // التحقق من وجود العميل
    const client = await Client.findById(req.user.id);
    if (!client) {
      return res.status(404).json({ success: false, message: "❌ العميل غير موجود" });
    }

    // إنشاء التقييم الجديد
    const newRating = new Rating({
      workerId,
      clientId: req.user.id,
      rating,
      comment
    });

    // حفظ التقييم
    await newRating.save();

    // إضافة التقييم إلى العامل وتحديث المعدل
    worker.ratings.push(newRating);
    await worker.save();

    // تحديث متوسط التقييمات
    const totalRating = worker.ratings.reduce((acc, curr) => acc + curr.rating, 0);
    const averageRating = totalRating / worker.ratings.length;

    // تحديث متوسط التقييم
    worker.averageRating = averageRating;
    await worker.save();

    res.status(200).json({ success: true, message: "✅ تم إضافة التقييم بنجاح" });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء إضافة التقييم" });
  }
};

// الحصول على التقييمات الخاصة بالعامل
const getRatings = async (req, res) => {
  const { workerId } = req.params; // استلام id العامل من المعاملات

  try {
    const worker = await Worker.findById(workerId).populate("ratings.clientId", "name"); // جلب العامل مع التقييمات
    if (!worker) {
      return res.status(404).json({ success: false, message: "❌ العامل غير موجود" });
    }

    res.status(200).json({ success: true, ratings: worker.ratings });
  } catch (error) {
    res.status(500).json({ success: false, message: "❌ حدث خطأ أثناء جلب التقييمات" });
  }
};

module.exports = { addRating, getRatings };
