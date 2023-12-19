const bodyParser = require("body-parser");
const express = require("express");

module.exports = (api) => {
  const app = express();
  app.use(bodyParser.json());

  const PORT = process.env.PORT;

  app.use(require("./routes/tracker/request")(api));
  app.use(require("./ping")());

  app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
  });
};
