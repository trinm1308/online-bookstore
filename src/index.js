const { app } = require("./common/core/express");
require("dotenv").config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is up and running at http://localhost:${port}`);
});
