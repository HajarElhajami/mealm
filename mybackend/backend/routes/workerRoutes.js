
// const express = require("express");
// const { registerWorker, loginWorker, getWorkers, deleteWorker, upload } = require("../controllers/workerController");

// const router = express.Router();

// router.post("/workers", upload.single("nationalIdImage"), registerWorker); 

// router.post("/worker", loginWorker);

// router.get("/workers", getWorkers);

// router.delete("/workers/:id", deleteWorker);

// module.exports = router;









const express = require("express");
const { 
  registerWorker, 
  loginWorker, 
  getWorkers, 
  deleteWorker, 
  acceptWorker, 
  rejectWorker, 
  getWorkerById ,
  upload 
} = require("../controllers/workerController");

const router = express.Router();

router.post("/workers", upload.single("nationalIdImage"), registerWorker);
router.post("/worker", loginWorker);
router.get("/workers", getWorkers);
router.delete("/workers/:id", deleteWorker);

router.get("/workers/:id", getWorkerById);

// ➕ المسارات الجديدة:
router.patch("/workers/accept/:id", acceptWorker);
router.patch("/workers/reject/:id", rejectWorker);

module.exports = router;
