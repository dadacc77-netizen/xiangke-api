const express = require("express");
const app = express();

app.use(express.json()); // 🔥 這行一定要有
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

// 基本測試
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 測試 API
app.get("/test", (req, res) => {
  res.json({ message: "Hello API!" });
});

// 🔥 AI 聊天 API（現在先假資料，下一步接 GPT）
app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `🤖 AI回覆：我收到「${message}」`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});