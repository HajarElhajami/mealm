require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig"); 

const usersRoutes = require("./routes/usersRoutes");
const loginRoutes = require("./routes/customerRoutes"); 
const workerRoutes = require("./routes/workerRoutes");

const app = express();
app.use(express.json());
app.use(cors());

connectDB()
.then(async () => {
}).catch(err => console.error("❌ خطأ في الاتصال بقاعدة البيانات:", err));

app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/worker", workerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
});

