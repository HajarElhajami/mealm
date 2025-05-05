const express = require("express");
const { addRating, getRatings } = require("../controllers/ratingsController");
const authenticateClient = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/rating", authenticateClient, addRating);

// مسار لإضافة التقييم
router.post("/rating", addRating);

// مسار لعرض التقييمات الخاصة بالعامل
router.get("/worker/:workerId/ratings", getRatings);

module.exports = router;
