// // controllers/customerController.js
// import Customer from "../models/Customer2";

// // إضافة زبون جديد
// export const createCustomer = async (req, res) => {
//   try {
//     const { name, email, phone, address, city } = req.body;
//     const newCustomer = new Customer({ name, email, phone, address, city });
//     await newCustomer.save();
//     res.status(201).json({ message: "تم إضافة الزبون بنجاح", customer: newCustomer });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء إضافة الزبون", error });
//   }
// };

// // جلب جميع الزبائن
// export const getCustomers = async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     res.status(200).json(customers);
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء جلب الزبائن", error });
//   }
// };

// // تحديث بيانات الزبون
// export const updateCustomer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, phone, address, city } = req.body;
//     const updatedCustomer = await Customer.findByIdAndUpdate(id, { name, email, phone, address, city }, { new: true });
//     res.status(200).json({ message: "تم تحديث بيانات الزبون", customer: updatedCustomer });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء تحديث بيانات الزبون", error });
//   }
// };
















// const Customer = require("../models/Customer2");

// // إنشاء زبون جديد
// exports.createCustomer = async (req, res) => {
//   try {
//     const { name, email, phone, address, city } = req.body;
//     const newCustomer = new Customer({ name, email, phone, address, city });
//     await newCustomer.save();
//     res.status(201).json({ message: "تم إضافة الزبون بنجاح", customer: newCustomer });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء إضافة الزبون", error });
//   }
// };

// // جلب جميع الزبائن
// exports.getCustomers = async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     res.status(200).json(customers);
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء جلب الزبائن", error });
//   }
// };

// // جلب بيانات زبون محدد
// export const getCustomerById = async (req, res) => {
//     try {
//       const customer = await Customer.findById(req.params.id);
//       if (!customer) return res.status(404).json({ message: "الزبون غير موجود" });
//       res.status(200).json(customer);
//     } catch (error) {
//       res.status(500).json({ message: "حدث خطأ أثناء جلب الزبون", error });
//     }
//   };  

// // تحديث الزبون
// exports.updateCustomer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, phone, address, city } = req.body;
//     const updatedCustomer = await Customer.findByIdAndUpdate(id, { name, email, phone, address, city }, { new: true });
//     res.status(200).json({ message: "تم تحديث بيانات الزبون", customer: updatedCustomer });
//   } catch (error) {
//     res.status(500).json({ message: "حدث خطأ أثناء تحديث بيانات الزبون", error });
//   }
// };









const Customer = require("../models/Customer2");

// إنشاء زبون جديد
exports.createCustomer = async (req, res) => {
  try {
    const { name, email, phone, address, city } = req.body;
    const newCustomer = new Customer({ name, email, phone, address, city });
    await newCustomer.save();
    res.status(201).json({ message: "تم إضافة الزبون بنجاح", customer: newCustomer });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء إضافة الزبون", error });
  }
};

// جلب جميع الزبائن
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب الزبائن", error });
  }
};

// جلب بيانات زبون محدد
exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "الزبون غير موجود" });
    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء جلب الزبون", error });
  }
};

// تحديث الزبون
exports.updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, city } = req.body;
    const updatedCustomer = await Customer.findByIdAndUpdate(id, { name, email, phone, address, city }, { new: true });
    res.status(200).json({ message: "تم تحديث بيانات الزبون", customer: updatedCustomer });
  } catch (error) {
    res.status(500).json({ message: "حدث خطأ أثناء تحديث بيانات الزبون", error });
  }
};
