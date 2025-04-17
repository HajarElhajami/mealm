// // controllers/orderController.js
// import Order from "../models/orderModel.js";
// import Customer from "../models/Customer2.js";

// // إضافة طلب جديد
// export const createOrder = async (req, res) => {
//   try {
//     const { customer, phone, city, address, service } = req.body;
//     const image = req.file ? req.file.path : null;
//     const newOrder = new Order({ customer, phone, city, address, service, image });

//     // إضافة الطلب للزبون
//     const customerData = await Customer.findById(customer);
//     if (!customerData) {
//       return res.status(404).json({ message: "الزبون غير موجود" });
//     }

//     customerData.orders.push(newOrder);
//     await customerData.save();

//     await newOrder.save();
//     res.status(201).json({ message: "تم إنشاء الطلب بنجاح", order: newOrder });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء إنشاء الطلب", error });
//   }
// };

// // جلب جميع الطلبات
// export const getOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate('customer', 'name email phone');
//     res.status(200).json(orders);
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء جلب الطلبات", error });
//   }
// };

// // تحديث حالة الطلب
// export const updateOrderStatus = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { status } = req.body;
//     const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
//     res.status(200).json({ message: "تم تحديث حالة الطلب", order });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء التحديث", error });
//   }
// };














const Order = require("../models/Order"); // تأكدي أن الاسم والموقع صحيحين

// 📥 إنشاء طلب جديد
const createOrder = async (req, res) => {
  try {
    const { customer, phone, city, address, service } = req.body;
    const image = req.file ? req.file.filename : null;

    const newOrder = new Order({
      customer,
      phone,
      city,
      address,
      service,
      image,
      status: "قيد المعالجة", // يمكن تضيف حالة مبدئية
    });

    await newOrder.save();
    res.status(201).json({ message: "✅ تم إنشاء الطلب بنجاح" });
  } catch (error) {
    console.error("❌ فشل في إنشاء الطلب:", error);
    res.status(500).json({ error: "خطأ في الخادم" });
  }
};

// 📤 جلب جميع الطلبات
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error("❌ فشل في جلب الطلبات:", error);
    res.status(500).json({ error: "فشل في جلب الطلبات" });
  }
};

// 🔄 تحديث حالة الطلب
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(id, { status }, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ error: "الطلب غير موجود" });
    }

    res.json(updatedOrder);
  } catch (error) {
    console.error("❌ خطأ في تحديث حالة الطلب:", error);
    res.status(500).json({ error: "خطأ في تحديث حالة الطلب" });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus,
};
