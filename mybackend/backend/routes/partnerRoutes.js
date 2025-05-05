const express = require('express');
const router = express.Router();
const PartnerRequest = require('../models/PartnerRequest');

// POST /api/partners → إنشاء طلب شراكة جديد
router.post('/', async (req, res) => {
  try {
    const partner = new PartnerRequest(req.body);
    await partner.save();
    res.status(201).json({ message: 'تم حفظ الطلب بنجاح' });
  } catch (err) {
    res.status(500).json({ error: 'فشل حفظ الطلب', details: err.message });
  }
});

// GET /api/partners → جلب كل طلبات الشراكة
router.get('/', async (req, res) => {
  try {
    const requests = await PartnerRequest.find().sort({ createdAt: -1 });
    res.json({ requests });
  } catch (err) {
    res.status(500).json({ error: 'فشل جلب الطلبات', details: err.message });
  }
});

module.exports = router;
