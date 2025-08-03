require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.listen(port, hostname, () => {
  console.log("App is running on port: " + port);
});
