const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json());

const browse = require("../api/browse/router");
app.use("/browse", browse);

const manage = require("../api/manage/router");
app.use("/manage", manage);

const fs = require("fs");
let CONFIG_RAW = fs.readFileSync("config.json");
let CONFIG = JSON.parse(CONFIG_RAW);

const port = CONFIG.port;

app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});

module.exports = { app };
