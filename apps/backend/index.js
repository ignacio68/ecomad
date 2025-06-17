const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/ping", (_req, res) => res.send("pong"));

app.listen(PORT, () => {
  console.log(`EcoMAD backend running on http://localhost:${PORT}`);
});
