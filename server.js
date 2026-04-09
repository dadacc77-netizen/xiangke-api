const express = require("express");
const app = express();

app.use(express.json()); // ✅ 只留這一個

const PORT = process.env.PORT || 8080;

app.post("/chat", (req, res) => {
  const message = req.body.message;

  res.json({
    reply: `🤖 AI回覆：我收到「${message}」`
  });
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});