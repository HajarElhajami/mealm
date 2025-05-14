const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // يمكنك إضافة المزيد من الحقول هنا
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
