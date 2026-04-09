const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// 🔥 OpenAI
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
    const message = req.body.message;

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "你是一個聰明的AI助手" },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;

    res.json({ reply });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "出錯了" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});