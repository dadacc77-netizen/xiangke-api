const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Xiang-Ke API is running 🚀");
});

app.get("/ai", (req, res) => {
  const samples = [
    { comment: "鳳山鹹酥雞哪間好吃？", level: "HIGH" },
    { comment: "前鎮雞排變貴了", level: "LOW" },
    { comment: "瑞北夜市最近人變多", level: "MID" }
  ];

  const pick = samples[Math.floor(Math.random() * samples.length)];
  res.json(pick);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
