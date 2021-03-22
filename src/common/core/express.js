const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors())
app.use(express.json());

const browse = require("../../api/browse/router");
app.use("/browse", browse);

const manage = require("../../api/manage/router");
app.use("/manage", manage);

module.exports = { app };
