var express = require("express");
var app = express();
var multer = require("multer");
var cors = require("cors");
var tess = require("tesseract.js");

app.use(cors());

var mangoFileName = null;

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public");
  },
  filename: function(req, file, cb) {
    mangoFileName = Date.now() + "-" + file.originalname;
    cb(null, mangoFileName);
  }
});

var upload = multer({ storage: storage }).single("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    const worker = tess.createWorker({
      logger: m => console.log(m)
    });
    console.log(mangoFileName);
    (async () => {
      await worker.load();
      await worker.loadLanguage("eng");
      await worker.initialize("eng");
      const {
        data: { text }
      } = await worker.recognize(`public/${mangoFileName}`);
      console.log(text);
      await worker.terminate();
      res.json(text);
    })();
    //return res.status(200).send(req.file);
  });
});

app.listen(5001, function() {
  console.log("App running on port 5001");
});
