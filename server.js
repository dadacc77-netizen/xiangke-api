const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// 🔥 OpenAI（新版寫法）
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 測試首頁
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// 🔥 GPT Chat API
app.post("/chat", async (req, res) => {
  try {
    console.log("收到:", req.body);

    const message = req.body.message;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "你是一個親切的AI助手" },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: completion.choices[0].message.content,
    });

  } catch (err) {
    console.error("錯誤:", err);

    res.status(500).json({
      error: "GPT 爆了",
      detail: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});