const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

// 🔥 基本測試
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🔥 測試 API
app.get("/test", (req, res) => {
  res.json({ message: "Hello API!" });
});

// 🔥 模擬聊天 API（之後可接 GPT）
app.post("/chat", (req, res) => {
  const { message } = req.body;

  res.json({
    reply: `你剛剛說的是：${message}`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});