const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "DefaultApp";

app.get("/", (req, res) => {
  res.send(`${APP_NAME} running on port ${PORT} ??`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
