// routes/workerRoutes.js
const express = require('express');
const router = express.Router();
const { loginWorker } = require('../controllers/workerController');

router.post('/login', loginWorker);

module.exports = router;
