
require("dotenv").config();
let express = require("express");
const cors = require("cors");
const connectDB = require("./config/dbConfig"); 

const usersRoutes = require("./routes/usersRoutes");
const loginRoutes = require("./routes/customerRoutes"); 
const workerRoutes = require("./routes/workerRoutes");
const statsRoutes = require("./routes/statsRoutes");
const orderRoutes = require("./routes/orderRoutes.js");
const customer2Routes = require("./routes/customer2Routes.js");
const partnersRouter = require('./routes/partnerRoutes.js');
const messageRoutes = require('./routes/messageRoutes.js');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // للسماح بإرسال البيانات من النماذج
app.use(cors());
app.use("/uploads", express.static("uploads")); // Uncomment if you want to serve images


const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));



connectDB()
  .then(async () => {
    console.log("✔️ Connected to database");
  })
  .catch(err => console.error("❌ Error connecting to the database:", err));

app.use("/api/users", usersRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/worker", workerRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/customers", customer2Routes);
app.use('/api/partners', partnersRouter);
app.use('/api/messages', messageRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
