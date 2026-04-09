const express = require("express");
const app = express();

// Railway 必須用這個 PORT
const PORT = process.env.PORT || 3000;

// 測試首頁
app.get("/", (req, res) => {
  res.send("🚀 API is running!");
});

// 啟動 server（超重要）
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// deploy trigger