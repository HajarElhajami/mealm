// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/dbConfig"); 

// const usersRoutes = require("./routes/usersRoutes");
// const loginRoutes = require("./routes/customerRoutes"); 
// const workerRoutes = require("./routes/workerRoutes");
// // const orderRoutes = require("./routes/orderRoutes.js");
// // const customer2Routes = require("./routes/customer2Routes.js");

// const app = express();
// app.use(express.json());
// app.use(cors());
// // app.use("/uploads", express.static("uploads")); 

// connectDB()
// .then(async () => {
// }).catch(err => console.error("❌ خطأ في الاتصال بقاعدة البيانات:", err));

// app.use("/api/users", usersRoutes);
// app.use("/api/login", loginRoutes);
// app.use("/api/worker", workerRoutes);
// // app.use("/api/orders", orderRoutes);
// // app.use("/api/customers", customer2Routes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
// });















require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig"); 

const usersRoutes = require("./routes/usersRoutes");
const loginRoutes = require("./routes/customerRoutes"); 
const workerRoutes = require("./routes/workerRoutes");
// const orderRoutes = require("./routes/orderRoutes.js");
// const customer2Routes = require("./routes/customer2Routes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // للسماح بإرسال البيانات من النماذج
app.use(cors());
// app.use("/uploads", express.static("uploads")); // Uncomment if you want to serve images

const fs = require("fs");
const uploadDir = "uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

connectDB()
  .then(async () => {
    console.log("✔️ Connected to database");
  })
  .catch(err => console.error("❌ Error connecting to the database:", err));

app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/worker", workerRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/customers", customer2Routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
