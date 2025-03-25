
const express = require("express");
const { registerWorker, loginWorker, getWorkers, deleteWorker, upload } = require("../controllers/workerController");

const router = express.Router();

router.post("/workers", upload.single("nationalIdImage"), registerWorker); 

router.post("/worker", loginWorker);

router.get("/workers", getWorkers);

router.delete("/workers/:id", deleteWorker);

module.exports = router;
