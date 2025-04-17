const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("💾 Enregistrement dans :", path.join(__dirname, "uploads/"));
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    console.log("📸 Fichier enregistré :", fileName);
    cb(null, fileName);
  }
});
