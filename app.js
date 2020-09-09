const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes.config.js");
require("dotenv").config();

const app = express();

app.use(cors());

app.use("/", routes);

require('./js/scraper.js')

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server Running in port: ${PORT}`);
});
