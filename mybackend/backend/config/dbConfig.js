const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true     
    });
    console.log("✅ متصل بقاعدة البيانات MongoDB");
  } catch (error) {
    console.error("❌ خطأ في الاتصال بقاعدة البيانات", error);
    process.exit(1);
  }
};

module.exports = connectDB;
