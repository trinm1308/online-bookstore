const express = require("express");
const app = express();
var cors = require('cors')
const errorHandler = require("./error-handler");
const jwt = require("../../common/auth/jwt")

app.use(cors())
app.use(express.json());

const browse = require("../../api/browse/router");
app.use("/browse", browse);

const manage = require("../../api/manage/router");
app.use("/manage", manage);

app.use(jwt())
app.use(errorHandler)

module.exports = { app };
