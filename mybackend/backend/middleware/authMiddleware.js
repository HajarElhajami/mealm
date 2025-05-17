// // backend/middleware/uploadMiddleware.js
// const multer = require('multer');
// const path = require('path');
// const jwt = require('jsonwebtoken');
// const Worker = require('../models/Worker');

// const authWorker = async (req, res, next) => {
//   try {
//     const token = req.header('Authorization').replace('Bearer ', '');
//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
//     const worker = await Worker.findOne({ _id: decoded.id, 'tokens.token': token });

//     if (!worker) {
//       throw new Error();
//     }

//     req.token = token;
//     req.worker = worker;
//     next();
//   } catch (err) {
//     res.status(401).send({ error: 'الرجاء المصادقة أولاً' });
//   }
// };

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });


// module.exports = authWorker;










































































// authMiddleware.js
const jwt = require('jsonwebtoken');
const Worker = require('../models/Worker');

const authWorker = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      throw new Error('الوصول غير مسموح، يلزم تسجيل الدخول');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const worker = await Worker.findById(decoded.id);

    if (!worker) {
      throw new Error('العامل غير موجود');
    }

    req.worker = worker;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = authWorker;