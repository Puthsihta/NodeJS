var express = require("express");
var multer = require("multer");
const useModel = require("./model/useModel");
var app = express();
var port = 3000;
app.use(express.json());
require("./db/db");
app.listen(port, () => console.log("severer running on port ", port));
// app.use(bodyParser.json());
app.use(express.json);
// app.use(express.static(__dirname + "/public"));
// app.use("./uploads", express.static("uploads"));

// const storage = multer.diskStorage({
//   destination: function (req, file, cd) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cd) {
//     cd(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
app.post("/addUser", async (req, res) => {
  //   const image_name = req.file.originalname;
  //   const url = `https://${req.headers.host}/uploads/${image_name}`;
  const data = {
    image: "ddknd",
    name: "dflknfd",
  };
  try {
    const file = new useModel(data);
    await file.save();
    res.json(file);
  } catch (e) {
    console.log(e);
  }
});
