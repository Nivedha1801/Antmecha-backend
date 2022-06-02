const express = require("express");
const dotenv = require('dotenv');
var cors = require("cors");
var app = express();
const bodyParser = require("body-parser");

dotenv.config();

app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ credentials: true, origin: true }));

const clickupRouter = require("./routes/clickup-api.router");

app.use("/auth/clickup", clickupRouter);

app.get('/redirect', (req,res) => {
  console.log("Redirected msg")
  console.log(req.query.code)
  res.send({
    status: "success"
  })
})

app.listen(3000, () => {
  console.log(`App listening in port ${process.env.PORT}`)
})