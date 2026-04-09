const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// 測試首頁
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🔥 Chat API（重點）
app.post("/chat", (req, res) => {
  console.log("收到的 body:", req.body);

  const message = req.body.message; // ⚠️ 這行就是關鍵

  res.json({
    reply: `🤖 AI回覆：我收到「${message}」`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});