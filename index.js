const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 8010;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/name", (req, res) => {
  res.send(`name is ${process.env.name}`);
});

app.listen(PORT, () => {
  console.log(`Listening at PORT ${PORT} \nhttp://localhost:${PORT}`);
});
