const express = require("express");
const app = express();

// 🔥 這行一定要有（解析 JSON）
app.use(express.json());

const PORT = process.env.PORT || 8080;

// 👉 測試首頁
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 👉 Chat API
app.post("/chat", (req, res) => {
  console.log("收到的 body:", req.body); // 🔥 這行幫你debug

  const message = req.body.message;

  res.json({
    reply: `🤖 AI回覆：我收到「${message}」`
  });
});

// 👉 啟動伺服器
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});