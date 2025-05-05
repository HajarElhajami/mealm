const express = require("express");
const Message = require('../models/Message');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { fullName, email, message } = req.body;
    const newMessage = new Message({ fullName, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'تم إرسال الرسالة بنجاح' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'فشل إرسال الرسالة' });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ messages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'فشل تحميل الرسائل' });
  }
});

module.exports = router;
